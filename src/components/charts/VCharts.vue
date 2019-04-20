<template>

  <div class="page_Echarts">
    <div class="top">
      <div class="top_left">
        <h1>折线图</h1>
         <ve-line :data="chartData"></ve-line>
      </div>
      <div class="top_right">
        <h1>柱状图</h1>
       <ve-histogram :data="chartData2"></ve-histogram>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom_left">
        <h1>饼图</h1>
       <ve-pie :data="chartData3"></ve-pie>
      </div>
      <div class="bottom_right">
        <h1>环图</h1>
       <ve-scatter :data="chartData4"></ve-scatter>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
       chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { 日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: '1/2', 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: '1/3', 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: '1/4', 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: '1/5', 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: '1/6', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      },
       chartData2: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { 日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: '1/2', 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: '1/3', 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: '1/4', 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: '1/5', 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: '1/6', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      },
      chartData3: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
      },
       chartData4: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        }
    };
  },
  methods: {
  },
 
};
</script>
<style lang="less" scoped>
.page_Echarts {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
      background: #fff;
  .top {
    flex: 1;
    display: flex;
    .top_left {
      flex: 1;
      display: flex;
      flex-direction: column;
      .chart-area {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .top_right {
      flex: 1;
      display: flex;
      flex-direction: column;
      .chart-area {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .bottom {
    flex: 1;
    display: flex;
    .bottom_left {
      flex: 1;
      display: flex;
      flex-direction: column;
      .chart-area {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .bottom_right {
      flex: 1;
      display: flex;
      flex-direction: column;
      .chart-area {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>

