module.exports = {
    root: true,
    extends: ['plugin:vue/essential', 'plugin:vue/recommended', 'eslint:recommended'],
    plugins: ['vue'],
    parser: 'vue-eslint-parser',
    parserOptions: {
      ecmaVersion: 2020
    },
    env: {
      es6: true,
      node: true
    },
    globals: {
      uni: true,
      getApp: true
    },
    rules: {
      'prettier/prettier': 'off',
      'vue/html-self-closing': 'off',
      'vue/attributes-order': 0, // 属性换行提示
      'vue/singleline-html-element-content-newline': 'off', // 关闭在只有一个属性的标签里面的文字需要换行的提示
      'vue/multiline-html-element-content-newline': 'off', // 关闭在有多个属性的标签里面的文字需要换行的提示
      'generator-star-spacing': 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-tabs': 'off',
      // 'nonblock-statement-body-position': 1,
      'object-curly-spacing': 'off',
      'vue/no-use-v-if-with-v-for': [
        'error',
        {
          allowUsingIterationVar: true
        }
      ],
      // 关闭组件命名规则
      "vue/multi-word-component-names":"off",
      "vue/max-attributes-per-line":"off",
      // 这里不错提示，生产环境打包时直接把console.log去掉
      'no-console': 'off',
      'no-empty': 0, // 不允许空作用域
      // 'no-var': 2, // 不允许使用var
      'spaced-comment': ['error', 'always'], // 注释后面加空格
      'space-before-function-paren': [
        'error',
        { anonymous: 'always', named: 'never', asyncArrow: 'always' }
      ],
      indent: 'off'
    }
  }
  