<template>
  <div class="page_Echarts">
    <div class="top">
      <div class="top_left">
        <h1>折线图</h1>
        <div class="chart-area" ref="chart1"></div>
      </div>
      <div class="top_right">
        <h1>柱状图</h1>
        <div class="chart-area" ref="chart2"></div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom_left">
        <h1>饼图</h1>
        <div class="chart-area" ref="chart3"></div>
      </div>
      <div class="bottom_right">
        <h1>散点图</h1>
        <div class="chart-area" ref="chart4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import "echarts/lib/component/title";
export default {
  data() {
    return {
      charts: []
    };
  },
  methods: {
    /**
     * 画图表
     *
     * @param      {<element>}  el       容器
     * @param      {<object>}  options  图标参数
     */
    renderChart(el, options) {
      this.$nextTick(function() {
        let myChart = echarts.init(el);
        myChart.setOption(options);
        this.charts.push({
          chart: myChart,
          width: myChart.getWidth(),
          height: myChart.getHeight()
        });
      });
    },
    /**
     * 获取随机数
     *
     * @return {<numbers>}
     */
    getNumber() {
      return parseInt(Math.random() * 200) + 100;
    },
    /**
     * 获取图标1
     *
     */
    getChart_1() {
      this.$nextTick(function() {
        let valueX = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        let valueY = valueX.map(() => this.getNumber());
        this.renderChart(this.$refs["chart1"], {
          xAxis: {
            type: "category",
            data: valueX
          },
          yAxis: {
            type: "value"
          },
          grid: {
            top: "3%",
            bottom: "10%",
            containLabel: true
          },
          series: [
            {
              data: valueY,
              type: "line"
            }
          ]
        });
      });
    },
    /**
     * 获取图标2
     *
     */
    getChart_2() {
      this.$nextTick(function() {
        let valueX = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        let valueY = valueX.map(() => this.getNumber());
        this.renderChart(this.$refs["chart2"], {
          color: ["#3398DB"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            top: "3%",
            left: "3%",
            right: "4%",
            bottom: "10%",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              data: valueX,
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: "value"
            }
          ],
          series: [
            {
              name: "直接访问",
              type: "bar",
              barWidth: "60%",
              data: valueY
            }
          ]
        });
      });
    },
    /**
     * 获取图标4
     *
     */
    getChart_3() {
      this.$nextTick(function() {
        this.renderChart(this.$refs["chart3"], {
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: "vertical",
            x: "left",
            data: [
              "直达",
              "营销广告",
              "搜索引擎",
              "邮件营销",
              "联盟广告",
              "视频广告",
              "百度",
              "谷歌",
              "必应",
              "其他"
            ]
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              selectedMode: "single",
              radius: [0, "30%"],

              label: {
                normal: {
                  position: "inner"
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                { value: 335, name: "直达", selected: true },
                { value: 679, name: "营销广告" },
                { value: 1548, name: "搜索引擎" }
              ]
            },
            {
              name: "访问来源",
              type: "pie",
              radius: ["40%", "55%"],
              label: {
                normal: {
                  formatter:
                    "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
                  backgroundColor: "#eee",
                  borderColor: "#aaa",
                  borderWidth: 1,
                  borderRadius: 4,
                  // shadowBlur:3,
                  // shadowOffsetX: 2,
                  // shadowOffsetY: 2,
                  // shadowColor: '#999',
                  // padding: [0, 7],
                  rich: {
                    a: {
                      color: "#999",
                      lineHeight: 22,
                      align: "center"
                    },
                    // abg: {
                    //     backgroundColor: '#333',
                    //     width: '100%',
                    //     align: 'right',
                    //     height: 22,
                    //     borderRadius: [4, 4, 0, 0]
                    // },
                    hr: {
                      borderColor: "#aaa",
                      width: "100%",
                      borderWidth: 0.5,
                      height: 0
                    },
                    b: {
                      fontSize: 16,
                      lineHeight: 33
                    },
                    per: {
                      color: "#eee",
                      backgroundColor: "#334455",
                      padding: [2, 4],
                      borderRadius: 2
                    }
                  }
                }
              },
              data: [
                { value: 335, name: "直达" },
                { value: 310, name: "邮件营销" },
                { value: 234, name: "联盟广告" },
                { value: 135, name: "视频广告" },
                { value: 1048, name: "百度" },
                { value: 251, name: "谷歌" },
                { value: 147, name: "必应" },
                { value: 102, name: "其他" }
              ]
            }
          ]
        });
      });
    },
    /**
     * 获取图标4
     *
     */

    getChart_4() {
      this.$nextTick(function() {
        this.renderChart(this.$refs["chart4"], {
          xAxis: {},
          yAxis: {},
          grid: {
            top: "3%",
            left: "3%",
            right: "4%",
            bottom: "10%",
            containLabel: true
          },
          series: [
            {
              symbolSize: 20,
              data: [
                [10.0, 8.04],
                [8.0, 6.95],
                [13.0, 7.58],
                [9.0, 8.81],
                [11.0, 8.33],
                [14.0, 9.96],
                [6.0, 7.24],
                [4.0, 4.26],
                [12.0, 10.84],
                [7.0, 4.82],
                [5.0, 5.68]
              ],
              type: "scatter"
            }
          ]
        });
      });
    }
  },
  created() {
    this.getChart_1();
    this.getChart_2();
    this.getChart_3();
    this.getChart_4();
  }
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

