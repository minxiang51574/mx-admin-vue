<template>
  <el-aside class="aside" :width="collapse?'64px':'200px'">
    <el-menu
      :default-active="active"
      class="menu"
      :collapse="collapse"
      :unique-opened="true"
      background-color="#313653"
      text-color="#fff"
      active-text-color="#ff7d3d"
    >
      <template v-for="(item,index) in menuItems">
        <template v-if="item.name">
          <!-- 没有子菜单 -->
          <template v-if="!isSubMenu(item)">
            <el-menu-item :key="index" :index="item.name" v-if="isShow(item.meta)">
              <router-link :to="{name:item.name}">
                <i :class="[item.meta.icon]"></i>
                <span>{{item.meta.title}}</span>
              </router-link>
            </el-menu-item>
          </template>
          <!-- 有子菜单 -->
          <template v-if="isSubMenu(item)">
            <el-submenu :key="index" :index="item.name" v-if="isShow(item.meta,true)">
              <template slot="title">
                <i :class="[item.meta.icon]"></i>
                <span>{{item.meta.title}}</span>
              </template>
              <template v-for="(subItem,k) in item.children">
                <el-menu-item :key="k" :index="subItem.name" v-if="isShow(subItem.meta,true)">
                    <router-link :to="{name:subItem.name}">
                         <i :class="[subItem.meta.icon]"></i>
                         <span>{{subItem.meta.title}}</span>
                      </router-link>
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
        </template>
      </template>
    </el-menu>
  </el-aside>
</template>
<script>
import { mapGetters } from "vuex";
export default {
props: ["collapse"],
  computed: {
    ...mapGetters(["menuItems"]),
    active() {
      return this.$route.name.split("__")[0];
    }
  },
  data() {
    return {};
  },
  methods: {
    /**
     * 是否显示
     *
     * @param      {<object>}   meta    The meta
     * @return     {boolean}
     */
    isShow(meta, isSub = false) {
      //无图标 不在菜单显示
      if (!meta.icon && !isSub) {
        return false;
      }
      //hide=true 不在菜单显示
      if (meta.hide) {
        return false;
      }
      //没有配置权限 =>都可查看
      if (!meta.auth) {
        return true;
      }
      //权限判断
      return this.permission(meta.auth);
    },
    /**
     * 是否有子菜单
     *
     * @param {<object>} item
     */
    isSubMenu(item) {
      if (item.name && item.children) {
        return true;
      }
      return false;
    }
  }
};
</script>
<style lang='less' scoped>
.aside {
  position: relative;
  transition: all 0.5s;
 .menu:not(.el-menu--collapse) {
    width: 200px;
    min-width: 200px;
    min-height: 100%;
    overflow: hidden;
  }
  .menu {
    position: relative;
    border-right: 0 !important;
    min-height: 100%;
    overflow: hidden;
  }
  .el-menu-item {
    position: relative;
    a {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      color: inherit;
      text-decoration: none;
      box-sizing: border-box;
      padding: 0 20px;
    }
  }
  .el-submenu .el-menu-item a {
  padding: 0 40px;
}
}
</style>


