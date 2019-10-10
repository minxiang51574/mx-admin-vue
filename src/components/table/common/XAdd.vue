<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 15:28:45
 * @LastEditTime: 2019-09-16 19:47:47
 * @LastEditors: Please set LastEditors
 -->
<template>
    <el-dialog
        width="640px"
        :visible.sync="visible"
        title="添加"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        @close="close"
    >
    <el-form ref="form" @submit.native.prevent :model="form" label-width="80px">
      <el-form-item label="姓名："> 
         <el-input v-model="form.name" ></el-input>
      </el-form-item>
       <el-form-item label="状态："> 
           <el-input v-model="form.status" ></el-input>
      </el-form-item>
       <el-form-item label="性别："> 
           <el-input v-model="form.sex"></el-input>
      </el-form-item>
      <el-form-item label="部门："> 
           <el-input v-model="form.department"></el-input>
      </el-form-item>
       <el-form-item label="地址："> 
           <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="年龄："> 
           <el-input v-model="form.age"></el-input>
      </el-form-item>

    </el-form>
    <div slot="footer" align="right">
      <el-button size="small" type="default" @click="close">取 消</el-button>
      <el-button size="small" type="primary" @click="submit">提 交</el-button>
    </div>
    </el-dialog>
</template>
<script>
export default {
    data(){
        return{
            visible:false,
            form:{
                name:'',
                status:'',
                sex:'',
                department:"",
                address:'',
                age:"",
            }
        }
    },
    methods:{
        load(){
            this.visible = true
        },
        close(){
            this.visible = false
        },
        submit(){
            this.$http
            .post("/home/addList",this.form)
            .then(res=>{
                if(res.data.success){
                    this.$message.success("添加成功")
                    this.$emit("success")
                }
            })
            .catch(err=>{
                 this.$message.error("添加失败")
            })
            this.close()
        }
    }
}
</script>
<style lang="less" scoped>

</style>


