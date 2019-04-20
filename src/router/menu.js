import lazyLoading from './lazyLoading'
/**
 * 菜单说明
 */
export default {
    state:{
        items:[
            {
                path:'',
                name:'home',
                component:lazyLoading("home",true),
                meta:{
                    icon:'fa fa-home',
                    title:'首页'
                }
            },
            {
              path: 'charts',
              name: 'charts',
              component: lazyLoading("charts", true),
              meta: {
                  icon: 'fa fa-area-chart',
                  title: 'Charts'
              },
              children:[
                  {
                      path:'ECharts',
                      name: 'charts-ECharts',
                      component: lazyLoading('charts/ECharts',false),
                      meta: {
                         title: 'ECharts'
                       },
                  },
                  {
                    path: 'VCharts',
                    name: 'charts-VCharts',
                    component: lazyLoading('charts/VCharts', false),
                    meta: {
                      title: 'VCharts'
                    },
                  }
              ]
            },
             {
               path: 'table',
               name: 'table',
               component: lazyLoading("table", true),
               meta: {
                 icon: 'fa fa-table',
                 title: '基础表格'
               }
             },
             {
               path: 'form',
               name: 'form',
               component: lazyLoading("form", true),
               meta: {
                 icon: 'fa fa-calendar',
                 title: '表单'
               }
             },
             {
               path: 'tabs',
               name: 'tabs',
               component: lazyLoading("tabs", true),
               meta: {
                 icon: 'fa fa-cube',
                 title: 'tab选项卡'
               }
             },
             {
               path: 'map',
               name: 'map',
               component: lazyLoading("map", true),
               meta: {
                 icon: 'fa fa-map',
                 title: '百度地图'
               }
             },
             {
               path: 'drag',
               name: 'drag',
               component: lazyLoading("drag", true),
               meta: {
                 icon: 'fa fa-bars',
                 title: '拖拽组件'
               }
             },
               {
                 path: 'permission',
                 name: 'permission',
                 component: lazyLoading("permission", true),
                 meta: {
                   icon: 'fa fa-address-book-o',
                   title: '权限管理'
                 },
                 children:[
                     {
                         path:'pagePermission',
                         name:'pagePermission',
                         component: lazyLoading('permission/pagePermission',false),
                         meta: {
                             title: '页面权限',
                             auth: [0,1]
                         },
                     },
                     {
                         path: 'btnPermission',
                         name: 'btnPermission',
                         component: lazyLoading('permission/btnPermission', false),
                         meta: {
                             title: '按钮权限',
                            
                         },
                     }
                 ]
               },
        ]
    }
}