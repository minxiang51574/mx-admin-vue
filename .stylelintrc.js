/*
 * @Author       : Mx
 * @Date         : 2023-04-17 15:40:59
 * @Description  : 
 */
module.exports = {
    extends: [
      "stylelint-config-standard",
      "stylelint-config-standard-scss",
      "stylelint-config-html/html",
      "stylelint-config-html/vue",
    ],
    rules: {
      'declaration-colon-space-after': 'always-single-line', // 冒号后的声明需要一个空格或不允许空白
      'declaration-colon-space-before': 'never', // 冒号之前的声明需要一个空格或不允许空白
      'declaration-block-trailing-semicolon': 'always', // 要求或不允许在声明块后面的分号
      'block-closing-brace-newline-before': 'always', // 在块的右大括号前指定一个换行符或禁止留有空格
      'unit-no-unknown': [
        // 允许未知的单位
        true,
        {
          ignoreUnits: ['/rpx/', '/upx/'],
        },
      ],
      'selector-type-no-unknown': null, // 不允许未知类型选择器
      'rule-empty-line-before': [
        // 不允许rules前空一行
        'always',
        {
          ignore: ['after-comment', 'first-nested'],
        },
      ],
      indentation: 2, // 缩进
      'no-descending-specificity': null, // 禁止低优先级的选择器出现在高优先级的选择器之后
      'no-duplicate-selectors': null, // 禁止重复的选择器
      'no-empty-source': null, // 不允许空的来源
      "string-quotes": "single",
      // 忽略伪类选择器 ::v-deep
      "selector-pseudo-element-no-unknown": [true, {
        "ignorePseudoElements": ["/./", "v-deep", '-webkit-']
      }],
      // 不验证@未知的名字，为了兼容scss的函数
      "at-rule-no-unknown": null,
      // 禁止小于 1 的小数有一个前导零
      "number-leading-zero": "never",
      // class命名不约束，默认采用短横线命名(kebab-case)
      "selector-class-pattern": null,
      // id命名不约束格式
      "selector-id-pattern": null,
      "scss/at-mixin-pattern": null,
      // 颜色函数符号:"modern"|"legacy" 两种模式,modern 不需要加逗号，legacy需要加逗号
      "color-function-notation": null,
      "alpha-value-notation": "number",
      "font-family-no-missing-generic-family-keyword": null,
      "scss/at-import-partial-extension": "always",
      "scss/double-slash-comment-whitespace-inside": "always",
      // 行内最大长度 number: 20, 这里设置null
      "max-line-length": null,
      // scss表达式==， ===， / 等前后需要有空格
      "scss/operator-no-unspaced": true,
      // scss变量命名不约束格式
      "scss/dollar-variable-pattern": null,
      "declaration-block-no-duplicate-properties": [true, {
        ignore: ["consecutive-duplicates-with-different-values"],
      }],
      "value-no-vendor-prefix": null,
  
  // 禁止未知的函数
      "function-no-unknown": [true, {
        "ignoreFunctions": ["constant", "env"]
      }]
    }
  }
  
  