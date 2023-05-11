/*
 * @Author       : Mx
 * @Date         : 2023-05-11 17:35:25
 * @Description  : 
 */
module.exports = {
  // 箭头函数，只有一个参数的时候，也需要括号
  "arrowParens": "avoid",
  // jsx 标签的反尖括号需要换行
  "jsxBracketSameLine": false,
  "bracketSameLine": true,
  // 大括号内的首尾需要空格
  "bracketSpacing": true,
  // 是否格式化一些文件中被嵌入的代码片段的风格
  "embeddedLanguageFormatting": "auto",
  // 换行符使用 lf 结尾是 \n \r \n\r auto
  "endOfLine": "lf",
  "htmlWhitespaceSensitivity": "css",
   // 不需要自动在文件开头插入 @prettier
  "insertPragma": false,
  // jsx 不使用单引号，而使用双引号
  "jsxSingleQuote": false,
  // 一行最多 100 字符
  "printWidth": 100,
  // 使用默认的折行标准
  "proseWrap": "preserve",
  // 对象的 key 仅在必要时用引号
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": false, // 使用分号, 默认true
  "singleQuote": true,  // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  "tabWidth": 2,  // tab缩进大小,默认为2
  "trailingComma": "none",  // 行尾逗号,默认none,可选 none|es5|all
  "useTabs": false, // 使用tab缩进，默认false
  "vueIndentScriptAndStyle": true

}
     

