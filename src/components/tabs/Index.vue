<template>
  
    <div class="tabs">
  <el-card style="height:100%">
         <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
  </el-card>
    </div>
</template>
<script>
export default {
    data(){
        return {
 activeName: 'second'
            }
    },
     methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style lang="less" scoped>
.tabs{
     width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  flex-direction: column;
}
</style>


