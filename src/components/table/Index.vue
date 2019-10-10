<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 15:28:45
 * @LastEditTime: 2019-09-23 18:00:35
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="table">
    <div class="item">
      <el-form
        :inline="true"
        class="form-search"
      >
        <el-form-item label="关键字">
          <el-input
            v-model="params.keyWord"
            placeholder="请输入关键字"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            size="mini"
          >查 询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="item body">
      <!-- <el-button type="primary" size="mini" @click="removeAll">批量删除</el-button> -->
      <el-button
        type="primary"
        size="mini"
        @click="add"
      >添加</el-button>
      <el-table
        :data="list"
        style="width:100%;margin-top:20px"
        border
        v-loading="loading"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
          align="center"
        > </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          align="center"
        >
          <template slot-scope="{row}">
            {{row.status | toCaseStatus }}
          </template>
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="department"
          label="部门"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          align="center"
        ></el-table-column>
        <el-table-column
          prop
          label="操作"
          align="center"
        >
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
              @click="remove(scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div
        class="pagination"
        v-if="total>params.pageSize"
      >
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
    <x-add
      ref='add'
      @success='hasAdd'
    ></x-add>
    <x-edit
      ref='edit'
      @success='hasEdit'
    ></x-edit>
    <!-- <x-edit> -->
  </div>
</template>
<script>
import XAdd from "./common/XAdd";
import XEdit from "./common/XEdit";
import { mapGetters } from 'vuex';
export default {
  components: {
    XAdd,
    XEdit
  },
  data() {
    return {
      loading: false,
      list: [], //列表数
      total: 0, //总数
      params: {
        keyWord: "",
        pageSize: 10,
        currentPage: 1 //当前页
      },
      multipleSelection: []
    };
  },
  methods: {

    /**
     * 获取数据
     */
    getList() {
      this.loading = true;
      this.$http
        .get("/home/getList",{params:this.form})
        .then(res => {
          if (res.data.success) {
            this.loading = false;
            this.list = res.body.data;
          }
        })
        .catch(err => {
          this.loading = false;
        });
    },
    /**
     * 添加数据
     */
    add() {
      this.$refs.add.load();
    },
    /**
     * 添加成功回调
     */
    hasAdd() {
      this.getList();
    },
    /**
     * 编辑
     */
    edit(row) {
      this.$refs.edit.load(row);
    },
    /**
     * 编辑成功回调
     */
    hasEdit() {
        this.getList();
    },
    /**
     * 删除
     */
    remove({ id }) {
      this.$confirm("确认删除该条数据吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.sureRemove(id);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    /**
     * 确认删除
     */
    sureRemove(id) {
      let params = {
        id: id
      };
      this.$http
        .delete("/home/removeList", { data: params })
        .then(res => {
          if (res.data.success) {
            this.$message.success("删除成功");
            this.getList();
          }
        })
        .catch(err => {
          this.$message.error("删除失败");
        });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    /**
     * 批量删除
     */
    removeAll() {
      console.log(this.multipleSelection);
      let ids = this.multipleSelection.map(item => item.id);
      //拿到ids发送请求
    }
  },
  created() {
    this.getList();
  },
  computed:{
      ...mapGetters(['auth'])
  },
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
    .pagination {
      margin: 20px auto;
    }
  }
}
</style>



