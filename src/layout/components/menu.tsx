/*
 * @Author: Mx
 * @Date: 2023-06-01 12:38:10
 * @Description:
 */
import { defineComponent } from 'vue';
import { useRoute, RouteRecordRaw } from 'vue-router';
import { appRoutes } from '@/router/routes';
export default defineComponent({
  setup() {
    const route = useRoute();
    const menuTree = appRoutes;

    // 页面跳转
    const toView = () => {
      renderMenu();
    };

    // 渲染菜单
    const renderMenu = () => {
      function travel(menuList: RouteRecordRaw[]) {
        return menuList.map((item: any) => {
          // 有子菜单
          if (item?.children && item?.children?.length > 0) {
            const slots = {
              title: () => item.name,
            };
            return (
              <el-sub-menu index={item.path} v-slots={slots}>
                {travel(item?.children)}
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

    return () => (
      <div class="app-slider__menu">
        <el-menu
          default-active={route.path}
          background-color="transparent"
          collapse-transition={true}
          onSelect={toView}
        >
          {renderMenu()}
        </el-menu>
      </div>
    );
  },
});
