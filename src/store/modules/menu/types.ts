/*
 * @Author: Mx
 * @Date: 2023-05-31 17:45:41
 * @Description:
 */
export declare namespace Menu {
  enum Type {
    '目录' = 0,
    '菜单' = 1,
    '权限' = 2,
  }

  interface Item {
    id: number;
    parentId: number;
    path: string;
    router?: string;
    viewPath?: string;
    type: Type;
    name: string;
    icon: string;
    orderNum: number;
    isShow: number | boolean;
    keepAlive?: number;
    meta?: {
      label?: string;
      keepAlive?: number | boolean;
      iframeUrl?: string;
    };
    children?: Item[];
    component?: RouteComponent;
    redirect?: string;
  }

  type List = Item[];
}
