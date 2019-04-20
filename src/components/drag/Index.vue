<template>
  <div class="drag">
    <el-card style="height:100%">
      <h4 slot="header">
        <span>Vue.Draggable：基于 Sortable.js 的 Vue 拖拽组件</span>
      </h4>
      <div class="board-column">
        <div class="board-column-header">todo</div>
        <draggable class="board-column-content" :list="list1" :options="options">
          <div
            class="board-item"
            v-for="element in list1"
            :key="element.id"
          >{{element.name}} {{element.id}}</div>
        </draggable>
      </div>
      
    </el-card>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  data() {
    return {
      options: {
        group: "mission"
      },
      list1: [
        { name: "Mission", id: 1 },
        { name: "Mission", id: 2 },
        { name: "Mission", id: 3 },
        { name: "Mission", id: 4 }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.drag {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  .board-column {
    min-width: 300px;
    min-height: 100px;
    height: auto;
    overflow: hidden;
    background: #f0f0f0;
    border-radius: 3px;
    width:20%;
    .board-column-header {
      height: 50px;
      line-height: 50px;
      overflow: hidden;
      padding: 0 20px;
      text-align: center;
      background: #2ac06d;
      color: #fff;
      border-radius: 3px 3px 0 0;
    }

    .board-column-content {
      height: auto;
      overflow: hidden;
      border: 10px solid transparent;
      min-height: 60px;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;

      .board-item {
        cursor: pointer;
        width: 100%;
        height: 64px;
        margin: 5px 0;
        background-color: #fff;
        text-align: left;
        line-height: 54px;
        padding: 5px 10px;
        box-sizing: border-box;
        box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>



