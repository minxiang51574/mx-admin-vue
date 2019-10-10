<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 15:28:45
 * @LastEditTime: 2019-10-10 15:44:53
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="page_home">
    <div class="top">
      <el-row :gutter="10">
        <el-col :span="8">
          <el-card>
            <div slot="header" class="clearfix">
              <span style="font-weight:900">项目介绍</span>
            </div>
            <span>
                <h3>技术栈为:vue+vuex+koa2+MySQL</h3>
                断断续续历时几个月，从前端项目搭建，到后台koa2学习然后koa2后台接口以及数据库，接着到购买服务器域名，服务器前后台代码部署，一步一步总算结束了。自己在过程中不断的学习和请教成长了很多。万丈高楼平地起，继续加油！
            </span>
            <!-- <span>Vue</span>
            <el-progress :percentage="50"></el-progress>
            <span>Element</span>
            <el-progress :percentage="60"></el-progress>
            <span>Vuex</span>
            <el-progress :percentage="70" color="#8e71c7"></el-progress>
            <span>React</span>
            <el-progress :percentage="80" status="success"></el-progress>
            <span>Redux</span>
            <el-progress :percentage="90" status="exception"></el-progress> -->
          </el-card>
        </el-col>
        <el-col :span="16">
          <el-card>
            <div slot="header" class="clearfix">
              <span>待办事项</span>
            </div>
            <el-row :gutter="10">
              <el-col :span="8">
                <div class="item item1">
                  <p>统计1</p>
                  <div class="item_content">
                    <h2>
                      <ICountUp :endVal="endVal1" :options="options1"/>
                    </h2>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="item item2">
                  <p>统计2</p>
                  <div class="item_content">
                    <h2>
                      <ICountUp :endVal="endVal2" :options="options2"/>
                    </h2>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="item item3">
                  <p>统计3</p>
                  <div class="item_content">
                    <h2>
                      <ICountUp :endVal="endVal3" :options="options3"/>
                    </h2>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="bottom">
      <el-row :gutter="10">
        <el-col :span="8">
          <el-card>
            <h4 style="magin:10px 0">任务</h4>
            <span>10个已经完成，2个待完成，1个正在进行中</span>
            <div style="height: 320px;margin-top:10px">
              <el-steps direction="vertical" :active="2" finish-status="success">
                <el-step description="这是一段很长很长很长的描述性文字"></el-step>
                <el-step description="这是一段很长很长很长的描述性文字"></el-step>
                <el-step description="这是一段很长很长很长的描述性文字"></el-step>
                <el-step description="这是一段很长很长很长的描述性文字"></el-step>
              </el-steps>
            </div>
          </el-card>
        </el-col>
        <el-col :span="16">
          <el-card>
            <el-button type="text" @click="open2">点击打开 Message Box</el-button>
            <el-button  @click="open3" type="success">成功</el-button>
            <el-button  @click="open4" type="warning">警告</el-button>
            <el-button  @click="open5" type="message">消息</el-button>
            <el-button plain @click="open6" type="danger">错误</el-button>
            <el-collapse v-model="activeNames" @change="handleChange" style="margin-top:10px">
              <el-collapse-item title="一致性 Consistency" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
              <el-collapse-item title="反馈 Feedback" name="2">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
              </el-collapse-item>
              <el-collapse-item title="效率 Efficiency" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
              </el-collapse-item>
              <el-collapse-item title="可控 Controllability" name="4">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="tooptip" style="text-align:center">
        VUE-Admin ©2019 Created by 546143220@qq.com
     </div> 
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";
import { mapGetters} from 'vuex'
export default {
  components: {
    ICountUp
  },
  data() {
    return {
      endVal1: 0,
      endVal2: 0,
      endVal3: 0,
      value4: null,
      activeNames: ["2","3"],
      options1: {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      },
      options2: {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      },
      options3: {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      }
    };
  },
  computed:{
      ...mapGetters(['auth'])
  },
  created(){
      this.getNumList()
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    getNumList(){
        this.$http
        .get("/home/totalNum")
        .then(res=>{
          if (res.data.success) {
              const {number1,number2,number3} = res.body.data
              this.endVal1 = number1
              this.endVal2 = number2
              this.endVal3 = number3
          }

        })
        .catch(err=>{
            this.$message.error("请求失败请稍后再试")
        })

    },
    open2() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    open3() {
      this.$notify({
        title: "成功",
        message: "这是一条成功的提示消息",
        type: "success"
      });
    },

    open4() {
      this.$notify({
        title: "警告",
        message: "这是一条警告的提示消息",
        type: "warning"
      });
    },

    open5() {
      this.$notify.info({
        title: "消息",
        message: "这是一条消息的提示消息"
      });
    },

    open6() {
      this.$notify.error({
        title: "错误",
        message: "这是一条错误的提示消息"
      });
    }
  },

};
</script>
<style lang="less" scoped>
.page_home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  .top {
    height: 300px;
    width: 100%;
  }
  .bottom {
    flex: 1;
    width: 100%;
  }
  .item {
    position: relative;
    margin: 15px;
    padding: 12px;
    height: 158px;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    color: #fff;
    p {
      margin: 0;
      font-size: 14px;
    }
    &.item1 {
      background: rgb(49, 180, 141);
    }
    &.item2 {
      background: rgb(56, 161, 242);
    }
    &.item3 {
      background: rgb(59, 103, 164);
    }
  }
}
</style>

