<template>
  <div class="table">
    <div class="item">
      <el-form :inline="true" class="form-search">
        <el-form-item label="关键字">
          <el-input v-model="params.keyWord" placeholder="请输入关键字"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini">查 询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="item body">
      <!-- <el-button type="primary" size="mini" @click="removeAll">批量删除</el-button> -->
      <el-button type="primary" size="mini" @click="add">添加</el-button>
      <el-table :data="list" style="width:100%;margin-top:20px" border v-loading="loading" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center" > </el-table-column>
        <el-table-column prop="date" label="日期" width="200"></el-table-column>
        <el-table-column prop="name" label="姓名"  width="200"></el-table-column>
        <el-table-column prop="type" label="状态"  width="200">
            <template slot-scope="{row}">
                 {{row.type | toCaseStatus }}
            </template>
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="200"></el-table-column>
        <el-table-column prop="address" label="地址" ></el-table-column>
        <el-table-column prop label="操作" align="center" width="200">
            <template slot-scope="scope">
              <el-button
                type="text"
                size="mini"
                icon="el-icon-edit"
                circle
                @click="edit(scope.row,scope.$index)"
              >编辑</el-button>
              <el-button
                type="text"
                size="mini"
                icon="el-icon-delete"
                circle
                style="color:#F56C6C"
                @click="remove(scope.$index)"
              >删除</el-button>
            </template>
        </el-table-column>
      </el-table>
      <div class="pagination" v-if="total>params.pageSize">
        <el-pagination
        style="text-align:center"
          :current-page="params.currentPage"
          :page-size="params.pageSize"
          :pager-count="5"
          prev-text="上一页"
          next-text="下一页"
          layout="prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </div>
    <x-add ref='add' @success='hasAdd'></x-add>
    <x-edit ref='edit' @success='hasEdit'></x-edit>
    <!-- <x-edit> -->
  </div>
</template>
<script>
import XAdd from './common/XAdd'
import XEdit from './common/XEdit'
export default {
  components:{
      XAdd,XEdit
  },
  data() {
    return {
      loading: false,
      list: [], //列表数
      total:0,  //总数
      params:{
          keyWord:'',
          pageSize:10,
          currentPage: 1, //当前页
      },
      multipleSelection:[],
      GetList: [
          {
            date: "1990",
            name: "张1",
            sex: "女",
            address: "北京",
            id:1,
            type:0,
          },{
            date: "1991",
            name: "张2",
            sex: "女",
            address: "上海",
            id:2,
            type:3,
          },{
            date: "1992",
            name: "张3",
            sex: "女",
            address: "广州",
            id:3,
            type:2
          },{
            date: "1993",
            name: "张4",
            sex: "女",
            address: "深圳",
            id:4,
            type:1,
          },{
            date: "1994",
            name: "张5",
            sex: "女",
            address: "杭州",
            id:5,
            type:1,
          },{
            date: "1995",
            name: "张6",
            sex: "女",
            address: "武汉",
            id:6,
            type:2,
          }
        ]
    };
  },
  methods: {
      /**
     * 获取数据
     */
    getDate() {
     this.loading = true
      setTimeout(() => {
        this.list = this.GetList
        this.total = this.GetList.length
        this.loading = false
      }, 1000);
    },
     /**
     * 添加数据
     */
    add(){
        this.$refs.add.load()
    },
    /**
     * 添加成功回调
     */
    hasAdd(data){
        this.list.push(data)
    },
    /**
     * 编辑
     */
    edit(row,index){
        this.$refs.edit.load(row,index)
    }, 
    /**
     * 编辑成功回调
     */
    hasEdit(data,index){
        this.list.splice(index,1,data)
    },
     /**
     * 删除
     */
    remove(index){
        this.$confirm('确认删除该条数据吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        this.list.splice(index,1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    handleSelectionChange(val) {
        this.multipleSelection = val;
        
        
    },
     /**
     * 批量删除
     */
    removeAll(){
     console.log(this.multipleSelection);
     let ids = this.multipleSelection.map( item => item.id)
     //拿到ids发送请求
    } 
  },
  created() {
    this.getDate();
  }
};
</script>
<style lang="less" scoped>
.table {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  flex-direction: column;
  .item {
    box-sizing: border-box;
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    + .item {
      margin-top: 15px;
    }
    &.body {
      padding: 20px;
      flex: 1;
    }
    .pagination{
        margin: 20px auto
    }
  }
}
</style>



