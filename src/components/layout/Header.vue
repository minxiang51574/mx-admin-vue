<template>
  <el-header class="header" height="70px">
    <div class="btn">
      <i
        class="fa"
        :class="{'fa-outdent':!collapse,'fa-indent':collapse}"
        aria-hidden="true"
        @click="changeIsCollapse"
      ></i>
    </div>
    <div class="logo">VUE-Admin</div>
    <div class="header-user">
        <span style='margin-right:10px'>{{Time}} </span>
      <i class="fa fa-arrows-alt" @click="toggle" style="cursor: pointer;" title="全屏"></i>
      <el-tooltip
        class="item"
        effect="dark"
        content="跳转到github"
        placement="bottom"
        style="margin-left:10px;cursor: pointer;"
      >
        <i class="fa fa-github" @click="goto"></i>
      </el-tooltip>
      <div class="info">
        <img src="../../assets/logo.png" alt>
      </div>
      <span>{{auth.userName == 'admin'? '管理员':'游客'}}</span>
      <el-dropdown style="margin-left:10px">
        <i class="el-icon-caret-right"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>github地址</el-dropdown-item>
          <el-dropdown-item>
              <span @click="logout" style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>
<script>
import  { mapGetters } from 'vuex'
export default {
  props: ["collapse"],
  data() {
    return {
      fullscreen: false,
      Time:this.$date.format(0,"yyyy-mm-dd hh:ii:ss"),
      Timer:null,
    };
  },
  methods: {
    toggle() {
      this.$fullscreen.toggle(document.querySelector("body"), {
        wrap: false,
        callback: this.fullscreenChange
      });
    },
    fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen;
    },
    /**
     * 改变菜单状态
     */
    changeIsCollapse() {
      this.$emit("changeIsCollapse");
    },
    goto() {},

    logout(){
        this.$router.push({path:'/login'})
    }
  },
  computed:{
      ...mapGetters(['auth'])
  },
  created(){
      this.Timer = setInterval(() => {
          this.Time = this.$date.format(0, "yyyy-mm-dd hh:ii:ss")
      }, 1000);
  }
};
</script>
<style lang="less" scoped>
.header {
  padding-left: 0;
  width: 100%;
  height: 70px;
  color: #fff;
  box-sizing: border-box;
  overflow: visible;
  background-color: #3f4a5d;
  line-height: 70px;
  .btn {
    float: left;
    .fa {
      width: 70px;
      height: 70px;
      font-size: 18px;
      color: #fff;
      line-height: 70px;
      text-align: center;
      cursor: pointer;
      margin: 0;
    }
  }
  .logo {
    font-size: 25px;
    float: left;
  }
  .header-user {
    float: right;
    display: flex;
    align-items: center;
    height: 70px;
    width: 400px;
  }
  .info {
    margin-left: 20px;
    img {
      display: block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
   
  }
   i.el-icon-caret-right{
        color: #fff;
         transition: transform 0.3s ease-out;
       &:hover{
           transform: rotate(90deg);
       }
    }
}
</style>


