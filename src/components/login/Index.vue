<template>
  <div class="login">
    <div class="logon_box">
      <ul class="login_tab">
        <li
          v-for="(item,index) in liItems"
          :key="index"
          :class="{active:tab == index}"
          @click="changeTab(index)"
        >{{item}}</li>
      </ul>
      <div class="login-content">
        <div v-if="tab==0">
          <el-form :model="form" :rules="rules" ref="form">
            <el-form-item prop="account">
              <el-input type="text" v-model="form.account" placeholder="管理员admin,游客guest"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="form.password" placeholder="密码123456"></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" class="login_btn" @click="login" :loading="submitting">登 录</el-button>
        </div>
        <div v-if="tab == 1">
          <d-dlogin :options="options"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "../../store";
import { mapGetters, mapActions } from "vuex";
import DDlogin from "./common/DDlogin";
import { login } from "@/api/login";
export default {
  components: {
    DDlogin
  },
  data() {
    return {
      liItems: ["账密登陆", "钉钉扫码"],
      tab: 0,
      appid:'',
      form: {
        account: "", //账号
        password: "" //密码
      },
      submitting: false, //登陆loading
      rules: {
        account: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" }
        ]
      }
    };
  },
  computed: {
    options() {
        //1.出现二维码
      let { origin, pathname } = window.location;
      let REDIRECT_URI = origin + pathname;
      var ding_url = `https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=${this.appid}&response_type=code&scope=snsapi_login&redirect_uri=${REDIRECT_URI}`;
      return {
        id: "login_container", //这里需要你在自己的页面定义一个HTML标签并设置id，例如<div id="login_container"></div>或<span id="login_container"></span>
        goto: encodeURI(ding_url),
        style: "border:none;background-color:RGBA(0,0,0,0);",
        width: "402",
        height: "320"
      };
    }
  },
  methods: {
    ...mapActions(["setAuth"]),
    /**
     * 登陆方式切换
     */
    changeTab(el) {
      this.tab = el;
    },
    /**
     * 账号密码登陆
     */
    login() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.submitting = true;

          //实际项目操作1 创建api文件统一管理api 详情见api 与 request
          //  let params = {
          //       userName: this.form.account,
          //       password: this.form.password
          //    }
          //   login(params).then( res=>{})

          //实际项目操作2()
          //   this.$http.post("url",params).then(res => {
          //        let user = data.user || {};
          //        user.token = data.token;
          //        this.setAuth(user);
          //        //发送请求,拿到用户信息，利用Vuex存储用户信息
          //    })

          //管理员假登陆
          let user = {};
          if (this.form.account == "admin") {
            setTimeout(() => {
              user.token = "f6b1e9f3";
              user.userName = "admin";
              user.resourceIds = "1;2"; //权限
              this.setAuth(user);
              this.submitting = false;
              setTimeout(() => {
                this.$router.push({ name: "home" });
              }, 1000);
            });
          } else {
            //游客假登陆
            user.token = "f6b1e9f3";
            user.userName = "guest";
            user.resourceIds = "4"; //权限
            this.setAuth(user);
            this.submitting = false;
            this.$router.push({ name: "home" });
          }
        }
      });
    },

    /**
     * 获取后台给的appid
     */
    getAppId(){
            this.appid = 'dingoahwx9hiwslxrystpd';
            this.dingLoginInit(this.appid)

    },

    /**
     * 钉钉扫码
     */
    dingLoginInit(appid) {
      const { origin, pathname } = window.location;
      let REDIRECT_URI = origin + pathname;
       this.$nextTick(() => {
        // 2.扫描二维码
        var hanndleMessage = event => {
          var origin = event.origin;
          if (origin == "https://login.dingtalk.com") {
            //判断是否来自ddLogin扫码事件。
            var redirect_uri = `${REDIRECT_URI}&loginTmpCode=${event.data}`;
            var redirect_uri_check = `https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=${appid}&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=${redirect_uri}`;
            window.location.href = redirect_uri_check;
               // 扫描二维码之后地址栏会出现唯一的code 然后把处理code 详情见created
          }
        };
        if (typeof window.addEventListener != "undefined") {
          window.addEventListener("message", hanndleMessage, false);
        } else if (typeof window.attachEvent != "undefined") {
          window.attachEvent("onmessage", hanndleMessage);
        }
      });
    },
    /**
     * 钉钉登陆
     */
    dingLogin(){
        //发送请求将code传给后台 code是唯一识别码。
        //1.如果钉钉账号与项目账号绑定过，数据库会查到直接登陆成功
        //假登陆 将钉钉扫码的作为管理员
         let user = {};
           setTimeout(() => {
              user.token = "f6b1e9f3";
              user.userName = "admin";
              user.resourceIds = "1;2"; //权限
              this.setAuth(user);
              this.submitting = false;
              setTimeout(() => {
                this.$router.push({ name: "home" });
              }, 1000);
            });
        //2. 如果钉钉账号与项目账号没有绑定过，那么这里就发送一个新的接口，登陆且将code传给后台 后台讲账号与钉钉关联

    }
  },
  created(){
      this.getAppId(); //动态获取appid

    const code = this.$route.query.code;
    if (code) {
        //把code传给后台 登陆
         this.dingLogin(code);
    }
    
  }
};
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/img/login-bg.jpg");
  background-size: cover;
  background-position: center;
  .logon_box {
    width: 400px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 80%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 20px;
    background-color: rgba(32, 38, 62, 0.8);
    .login_tab {
      margin: 0;
      list-style: none;
      height: 50px;
      line-height: 40px;
      padding: 0;
      border-bottom: 1px solid #fff;
      text-align: center;
      li {
        font-size: 20px;
        font-family: SourceHanSansCN-Light;
        float: left;
        width: 50%;
        text-align: center;
        cursor: pointer;
        color: #fff;
        opacity: 0.5;
      }
      li.active {
        opacity: 1;
      }
    }
    .login-content {
      padding-top: 40px;
    }
    .login_btn {
      width: 100%;
      margin-top: 20px;
      font-size: 20px;
    }
  }
}
</style>

<style lang='less'>
.login {
  .el-form-item .el-input {
    margin-top: 10px;
  }
}
</style>
