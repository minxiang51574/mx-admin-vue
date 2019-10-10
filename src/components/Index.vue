<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 15:28:45
 * @LastEditTime: 2019-09-25 17:29:26
 * @LastEditors: Please set LastEditors
 -->
<!--
 * @Auther:Mx
 * @Date:2019-04-13  
 * @Description:主页
-->
<template>
  <div class="contain">
    <el-container direction="vertical">
      <app-header
        :collapse="collapse"
        @changeIsCollapse="changeIsCollapse"
      ></app-header>
      <el-container>
        <app-menu :collapse="collapse"></app-menu>
        <app-main></app-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import AppHeader from "./layout/Header";
import AppMenu from "./layout/Menu";
import AppMain from "./layout/Main";
export default {
  components: {
    AppHeader,
    AppMenu,
    AppMain
  },
  data() {
    return {
      collapse: false,
      sision: null
    };
  },
  
  created(){
      this.keepSesion()
  },
  methods: {
    changeIsCollapse() {
      this.collapse = !this.collapse;
    },
    keepSesion() {
      this.$http
        .get("/home/keepSesion")
        .then(res => {
          if (res.data.success) {
            this.sision = res.data.data.sesion;
          }
        })
        .catch(err => {});
    }
  }
};
</script>
<style lang='less' scoped>
.contain {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fff;
}
</style>
<style type="text/css">
.el-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.el-main {
  padding: 0 !important;
  overflow: hidden;
}
</style>



