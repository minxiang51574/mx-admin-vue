/*
 * @Author: Mx
 * @Date: 2023-06-01 12:38:10
 * @Description:
 */
import { compile, defineComponent, h } from 'vue';
import { useRouter, useRoute, RouteRecordRaw } from 'vue-router';
import { appRoutes } from '@/router/routes';
export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    // 页面跳转
    const toView = () => {};
    const menuTree = appRoutes;

    // 渲染子菜单
    const renderSubMenu = () => {
      function travel(menuList: RouteRecordRaw[]) {
        return menuList.map((item: any) => {
          // 有子菜单
          if (item?.children && item?.children?.length > 0) {
            const slots = {
              title: () => item.name,
            };
            return (
              <el-sub-menu index={item.path} v-slots={slots}>
                {getMenu(item?.children)}
              </el-sub-menu>
            );
          } else {
            // 没有子菜单
            return <el-menu-item index={item.path}>{item.name}</el-menu-item>;
          }
        });
      }
      return travel(menuTree);
    };

    //菜单生成
    const getMenu = (menuList: any) => {
      return menuList.map((item: any) => {
        if (item?.children && item?.children?.length > 0) {
          const slots = {
            title: () => item.name,
          };
          return (
            <el-sub-menu index={item.path} v-slots={slots}>
              {getMenu(item?.children)}
            </el-sub-menu>
          );
        } else {
          return <el-menu-item index={item.path}>{item.name}</el-menu-item>;
        }
      });
    };

    return () => (
      <div class="app-slider__menu">
        <el-menu
          default-active={route.path}
          background-color="transparent"
          collapse-transition={true}
          onSelect={toView}
        >
          {renderSubMenu()}
        </el-menu>
      </div>
    );
  },
});
