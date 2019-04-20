/**
 * { 常量配置类 }
 *
 * 常量命名同一使用大写单词以 “_” 英文下划线分割
 */
export default {
  install(Vue) {
    //是否是测试环境 true 打包测试环境 false 打包生产环境
    const IS_TEST = false
    const BASE_API = `//172.16.16.9${IS_TEST ? "0" : "1"}` //测试环境
    Vue.prototype.API = BASE_API
   
    /**
     * { 默认提示信息类 }
     */
    Vue.prototype.MSG = {
      unknown: "您操作太过频繁，请稍后再试"
    }
    /**
     * { 当前设备的屏幕宽度 }
     */
    Vue.prototype.SCREEN_WIDTH =
      (window.screen && window.screen.width) || document.body.clientWidth
    /**
     * { 正则类 }
     */
    Vue.prototype.RE = {
      uuid: /^[A-Za-z0-9]{3,20}$/,
      mobile: /^1[3|4|5|6|7|8|9]\d{9}$/,
      mobileTel: /^[+\-\s0-9]{6,20}$/,
      bankCode: /^[\s0-9]{15,30}$/,
      qq: /^[0-9]{5,13}$/,
      pwd: /^\S{6,16}$/,
      date: /^((?!0000)[0-9]{4}-((0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])-(29|30)|(0[13578]|1[02])-31))|(([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)-02-29)$/,
      blank: /\s+/g,
      nonempty: /^\S+$/
    }
    /**
     * 性别
     */
    Vue.prototype.SEX = [
      {
        id: "1",
        name: "男",
        value: 1
      },
      {
        id: "2",
        name: "女",
        value: 2
      }
    ]
    /**
     * { 翻页基数 }
     */
    Vue.prototype.PAGE_SIZES = [10, 20, 30, 50, 80, 100]

    /**
     * 本地身份证识别地址
     */
    Vue.prototype.WSHOST = "ws://127.0.0.1:9999/"

    /**
     * 图片格式
     */
    Vue.prototype.IMAGE_TYPES = [
      "image/jpeg",
      "image/bmp",
      "image/gif",
      "image/png",
      "image/jpg",
      "image/ico"
    ]
    /**
     * 视频格式
     */
    Vue.prototype.VIDEO_TYPES = [
      "video/mp4",
      "audio/ogg",
      "video/dvd",
      "video/avi",
      "video/wmv",
      "video/3gp",
      "video/mkv",
      "video/flv",
      "video/f4v",
      "video/rmvb",
      "video/webm",
      "video/hddvd"
    ]
    /**
     * 文档格式
     */
    Vue.prototype.DOC_TYPES = [
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/msword",
      "application/vnd.ms-excel",
      "application/pdf",
      "text/plain"
    ]
    /**
     * 文档格式后缀
     */
    Vue.prototype.DOC_SUFFIX_TYPES = ["doc", "docx"]

    /**
     * excel格式后缀
     */
    Vue.prototype.XLS_SUFFIX_TYPES = ["xls", "xlsx"]
  
  

  }
}
