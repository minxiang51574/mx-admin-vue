<!--
 * @Auther:Mx
 * @Date:2019-04-13  
 * @Description:主页
-->
<template>
  <div class="contain">
    <el-container direction="vertical">
      <app-header :collapse="collapse" @changeIsCollapse="changeIsCollapse"></app-header>
      <el-container>
        <app-menu :collapse="collapse"></app-menu>
         <app-main></app-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import AppHeader from "./layout/Header";
import AppMenu from "./layout/Menu"
import AppMain from "./layout/Main";
export default {
    components:{
        AppHeader,
        AppMenu,
        AppMain
    },
  data() {
      return {
        collapse:false
      }
  },
  methods: {
    changeIsCollapse() {
      this.collapse = !this.collapse;
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



