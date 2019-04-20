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
      <el-form-item label="日期："> 
         <el-input v-model="form.date" ></el-input>
      </el-form-item>
       <el-form-item label="姓名："> 
           <el-input v-model="form.name" ></el-input>
      </el-form-item>
       <el-form-item label="性别："> 
           <el-input v-model="form.sex"></el-input>
      </el-form-item>
       <el-form-item label="地址："> 
           <el-input v-model="form.address"></el-input>
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
                date:'',
                name:'',
                sex:'',
                address:''
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
            this.$emit('success',this.form)
            this.close()
        }
    }
}
</script>
<style lang="less" scoped>

</style>


