<template>
  <div class="nonsupport">
    <h3>您使用的浏览器版本过低，可能导致部分页面展示效果不佳，建议您使用以下浏览器进行访问。</h3>
    <p class="p">点击以下链接，升级浏览器</p>
    <div class="browser">
      <a href="https://www.microsoft.com/zh-cn/download/internet-explorer.aspx" target="_blank">
        <ul class="download-browser">
          <!-- <li><img src="../assets/browser/ie.png"></li> -->
          <li>Internet Explorer 10+
            <p class="help-text">(10.0及以上)</p>
          </li>
        </ul>
      </a>
      <a href="http://www.google.cn/chrome/browser/desktop/index.html" target="_blank">
        <ul class="download-browser">
          <!-- <li><img src="../assets/browser/chrome.png"></li> -->
          <li>Chrome 40+
            <p class="help-text">(40.0及以上)</p>
          </li>
        </ul>
      </a>
      <a href="https://www.mozilla.org/zh-CN/firefox/new/" target="_blank">
        <ul class="download-browser">
          <!-- <li><img src="../assets/browser/firefox.png"></li> -->
          <li>Firefox 40+
            <p class="help-text">(40.0及以上)</p>
          </li>
        </ul>
      </a>
      <a href="https://www.apple.com/safari/" target="_blank">
        <ul class="download-browser">
          <!-- <li><img src="../assets/browser/safari.png"></li> -->
          <li>Safari 5+
            <p class="help-text">(5.0及以上)</p>
          </li>
        </ul>
      </a>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() { return {}},
  created(){
    this.beforeEnter()
  },
  methods:{
    beforeEnter(){
      if(this.isSupport(window,document)){
        this.$router.replace({name:"Home"})
      }
    }
  }
}

</script>
<style type="text/css" scoped>
.nonsupport {
  width: 100%;
  min-height: 480px;
  overflow: hidden;
  text-align: center;
}

.nonsupport h3 {
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-weight: 700;
  font-size: 15px;
  margin: 15px 0;
  color: #000;
}

.nonsupport .p {
  font-size: 13px;
  padding-bottom: 10px;
  text-align: center;
  margin: 13px 0
}

.nonsupport .browser {
  width: 1000px;
  margin: 0 auto
}

.nonsupport .download-browser {
  vertical-align: top;
  float: left;
  padding: 0;
  width: 25%;
  text-align: center;
  list-style: none
}

.nonsupport li {
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #333;
  padding-top: 20px;
}

.nonsupport img {
  border: none;
}

.nonsupport .help-text {
  color: #666;
  font-size: 14px
}

.nonsupport .outer-north {
  text-align: center;
  padding-top: 50px
}

.nonsupport .app {
  display: none;
}

</style>
