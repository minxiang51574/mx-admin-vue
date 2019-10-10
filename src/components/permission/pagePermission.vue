<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 15:28:45
 * @LastEditTime: 2019-09-03 15:28:45
 * @LastEditors: your name
 -->
<template >
  <div class='page'>
       <el-card style="height:100%">
         <p> 这个只能有配置了管理员权限为1账号的才能访问 。 </p>
         <p> 在实际项目里会给管理有一个添加账号与绑定权限的页面，与后台协商好将账号与权限关联，然后给每个页面配置。
             
         </p>
       </el-card>
  </div>
   
</template>
<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>
<style lang="less" scoped>
.page{
 width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
}
</style>


