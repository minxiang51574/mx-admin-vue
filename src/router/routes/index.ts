/*
 * @Author: Mx
 * @Date: 2023-05-27 15:42:17
 * @Description:路由文件
 */

import type { RouteRecordNormalized } from 'vue-router';
const modules = import.meta.globEager('./modules/*.ts');

function formatModules(_modules: any, result: RouteRecordNormalized[]) {
  Object.keys(_modules).forEach((key) => {
    const defaultModule = _modules[key].default;
    if (!defaultModule) return;
    const moduleList = Array.isArray(defaultModule) ? [...defaultModule] : [defaultModule];
    result.push(...moduleList);
  });
  return result;
}

export const appRoutes: RouteRecordNormalized[] = formatModules(modules, []);
