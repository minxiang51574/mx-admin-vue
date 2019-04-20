/**
 * 日期操作类
 * @summary 日期操作类
 * @author Woo
 * @version 1.1
 * @since 2017/7/24
 */
export default {
  install(Vue) {
    Vue.prototype.$date = {
      dayMillisecond: 864e+5, //一天的毫秒数
      /**
       * 格式化日期对象
       * @param {Date} date 日期对象
       * @param {String} fmt 格式
       * @example
       * Utils.Date.format(date, 'yyyy-mm-dd hh:ii:ss');
       * @returns {String} 格式化日期字符串
       */
      format: function (date, fmt) {
        var _this = this;
        date = date || new Date();
        fmt = fmt || "yyyy-mm-dd";
        var o = {
          "m+": date.getMonth() + 1, //月份
          "d+": date.getDate(), //日
          "h+": date.getHours(), //小时
          "i+": date.getMinutes(), //分
          "s+": date.getSeconds() //秒
        };
        if (/(y+)/.test(fmt))
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
          if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
      },
      toDate: function (str) {
        let date = new Date()
        let parts = str.replace(/:/g, '-').replace(/\s/g, '-').split('-')
        date.setFullYear(parseInt(parts[0], 10))
        let month = parseInt(parts[1], 10)
        date.setMonth(month > 0 ? month - 1 : 11)
        date.setDate(parseInt(parts[2], 10))
        date.setHours(parseInt(parts[3], 10) || 0)
        date.setMinutes(parseInt(parts[4], 10) || 0)
        date.setSeconds(parseInt(parts[5], 10) || 0)
        /*date.setUTCFullYear(parseInt(parts[0], 10))
        date.setUTCMonth(month > 0 ? month - 1 : 11)
        date.setUTCDate(parseInt(parts[2], 10) || 0)
        date.setUTCHours(parseInt(parts[3], 10) || 0)
        date.setUTCMinutes(parseInt(parts[4], 10) || 0)
        date.setUTCSeconds(parseInt(parts[5], 10) || 0)*/
        //let t = this.format(date)
        return date
      },
      /**
       * 获得某月的天数
       * @param {number} month
       * @example
       * Utils.Date.getMonthDays(2, 2016) // => 二月天数
       * @param {number} [year]
       * @returns {number}
       */
      getMonthDays: function (month, year) {
        var _this = this;
        year = year || new Date().getFullYear();
        var monthStartDate = new Date(year, month - 1, 1),
          monthEndDate = new Date(year, month, 1);
        return Math.floor((monthEndDate - monthStartDate) / _this.dayMillisecond);
      },
      /**
       * 获取日期段
       * @param {Number} [num=0] 数字，负数表示上月/周/num天内
       * @param {Number|String} [mode=day] year：年，month：月，week：周，day：日
       * @param {Boolean} [oneDay=false] 指定为某一天
       * @example
       * Utils.Date.getDateRange(-1, 'month') // => 上月
       * Utils.Date.getDateRange(0, 'month') // => 本月
       * Utils.Date.getDateRange(-1, 'week') // => 上周
       * Utils.Date.getDateRange(0, 'week') // => 本周
       * Utils.Date.getDateRange(0, 'day') // => 今天
       * Utils.Date.getDateRange(-2, 'day', true) // => 昨天
       * Utils.Date.getDateRange(-7, 'day') // => 最近7天
       * Utils.Date.getDateRange(-30, 'day') // => 最近30天
       * @constructor
       * @returns {Object}
       */
      getDateRange: function (num, mode, oneDay) {
        var _this = this;
        num = parseFloat(num) || 0,
          mode = mode || "day";
        var date = new Date();
        var dateTime = date.getTime();
        var startDate = dateTime; //起始时间
        var endDate = dateTime; //结束时间
        if (mode == "week") { //上周/本周
          num = 7 * num;
          var weekTime = dateTime + num * _this.dayMillisecond;
          var week = date.getDay() || 7; //星期几
          startDate = weekTime - (week - 1) * _this.dayMillisecond;
          endDate = startDate + 6 * _this.dayMillisecond;
        } else if (mode == "month") { //上月/本月
          var monthDate = new Date(date.getFullYear(), date.getMonth() + num, 1);
          startDate = monthDate.getTime();
          monthDate.setDate(_this.getMonthDays(monthDate.getMonth() + 1, monthDate.getFullYear()));
          endDate = monthDate.getTime();
        } else { //num天内
          if (num < 0) { //向前
            num++; //去掉今天
            startDate = dateTime + num * _this.dayMillisecond;
            endDate = oneDay ? startDate : dateTime;
          } else if (num > 0) { //向后
            num--; //去掉今天
            endDate = dateTime + num * _this.dayMillisecond;
            startDate = oneDay ? endDate : dateTime;
          }
        }
        return {
          startDate: _this.format(new Date(startDate)),
          startDateObj: new Date(startDate),
          endDate: _this.format(new Date(endDate)),
          endDateObj: new Date(endDate),
          today: _this.format(new Date(dateTime)),
          todayObj: new Date(dateTime)
        }
      }
    };
  }
}
