/*
 * @Author: Mx
 * @Date: 2023-06-01 12:38:10
 * @Description: 
 */
import { compile, defineComponent, h } from "vue"
import { useRouter, useRoute, RouteRecordRaw } from "vue-router";
import { appRoutes } from '@/router/routes';
export default defineComponent({
    setup(){
        const router = useRouter();
        const route = useRoute();
        // 页面跳转
		const toView = () => {
		
		}
        const menuTree = appRoutes
        console.log("menuTree", menuTree);
        // 渲染子菜单
        const renderSubMenu = ()=>{
            function travel(_route: RouteRecordRaw[], nodes = []){
                    _route.forEach((element) => { 
                        const node =
                          element?.children && element?.children.length !== 0 ? (
                            <el-submenu index={element.path}>
                                {travel(element.children)}
                            </el-submenu>
                          ) : (
                            <el-menu-item index={element.path}>
                                { element.name }
                            </el-menu-item>
                          );
                        nodes.push(node as never);
                    });

                return nodes
            }
            return travel(menuTree);
        }

        //菜单生成
        const getMenu = (menuList: any) => {
            return menuList.map((item: any) => {
                if (item?.children && item?.children?.length > 0) {
                    const slots = {
                        title: () => (
                            item.name
                        ),
                    }
                    return (
                        <el-sub-menu index={item.path} v-slots={slots}>
                            { getMenu(item?.children) }
                        </el-sub-menu>
                    )
                } else {
                    return (
                    <el-menu-item index={item.path}>
                        {item.name}
                    </el-menu-item>
                    )
                }
            })
        }
  
        return ()=>(
            <div class="app-slider__menu">
                <el-menu
						default-active={route.path}
						background-color="transparent"
						collapse-transition={true}
						collapse={true}
						onSelect={toView}
					>
						{/* {renderSubMenu()} */}
                         {/* {getMenu(menuTree)} */}
                         <el-submenu index="1">
                            <el-menu-item index="1-1">item one</el-menu-item>
                            <el-menu-item index="1-2">item two</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="1-1">item one</el-menu-item>
                        <el-menu-item index="1-2">item two</el-menu-item>
                    </el-menu>
            </div>
        )

    }

})
