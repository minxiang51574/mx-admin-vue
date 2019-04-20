<template>
    <div class="map">
        <!-- <baidu-map class="bm-view" ak="YOUR_APP_KEY">
  </baidu-map> -->
   <p class="warn-tip">
            <a href="https://dafrok.github.io/vue-baidu-map/#/zh/index" target="_blank">参考百度地图 Vue Baidu Map
            </a>
     </p>
   <baidu-map class="map" style="height: 800px" center="北京">
    <bm-city-list></bm-city-list>
  </baidu-map>
    </div>
</template>
<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
export default {
     components: {
    BaiduMap
  },
    data(){
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.map{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  .warn-tip{
      background: rgba(66,185,131,.1);
      padding: 10px 0 ;
      a{
          color:#0094ff;
          text-decoration: none
      }
  }
}
</style>



