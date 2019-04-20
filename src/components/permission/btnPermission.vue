<template >
  <div class="btn_page">
    <el-card style="height:100%">
      <p>
        管理员能看到的按钮：<el-button type="success" v-if="permission([0,1])">删除</el-button>
      </p>
      <p>
       管理员和游客能看到的按钮： <el-button type="primary">查看</el-button>
      </p>
     
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
      return {
          
      }
  }
};
</script>
<style lang="less" scoped>
.btn_page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  p{
      padding: 10px 0;
      color: #0094ff;
  }
}
</style>


