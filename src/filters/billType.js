/**
 * Created by 54614 on 2019/3/25.
 */
/**
 * 工作流状态格式化
 *
 * @return     {string}  { 转换后的中文名称 }
 */
export function billType(v) {
  switch (v) {
    case 0:
      return '过滤1'
    case 1:
      return '过滤2'
    case 2:
      return '过滤3'
    case 3:
      return '过滤4'
  }
}
