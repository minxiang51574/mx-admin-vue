/*
 * @Author: Mx
 * @Date: 2023-06-01 12:38:10
 * @Description: menu
 */
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter, RouteRecordRaw } from 'vue-router';
import { appRoutes } from '@/router/routes';
import { useAppStore } from '@/store';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const route = useRoute();
    const router = useRouter();
    const appStore = useAppStore();
    const menuTree = appRoutes;

    // 页面跳转 目前根据name去跳转 如需根据path自行完善
    const toView = (url: string) => {
      console.log(url, route);
      if (url !== route.name) {
        router.push({ name: url });
      }
    };

    // 渲染菜单
    const renderMenu = () => {
      function travel(menuList: RouteRecordRaw[]) {
        return menuList.map((item: any) => {
          // 有子菜单
          if (item?.children && item?.children?.length > 0) {
            const slots = {
              icon: () => item?.meta?.icon,
              title: () => t(item.meta.locale),
            };
            return (
              <el-sub-menu index={item.name} v-slots={slots}>
                {travel(item?.children)}
              </el-sub-menu>
            );
          } else {
            // 没有子菜单
            return <el-menu-item index={item.name}>{t(item.meta.locale)}</el-menu-item>;
          }
        });
      }
      return travel(menuTree);
    };

    // 是否折叠菜单
    const isCollapse = computed(() => {
      return appStore.menuCollapse;
    });

    return () => (
      <div class="app-slider__menu">
        <el-menu
          default-active={route.path}
          collapse={isCollapse.value}
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
