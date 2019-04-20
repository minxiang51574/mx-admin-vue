图
# vue-admin 后台管理系统
演示地址：https://minxiang51574.github.io/vue-admin/

github地址：https://github.com/minxiang51574/vue_admin


### 前言
 > vue-admin是一个Vue+element-ui+vuex的后台管理模板，对于有vue基础的同学可以轻松上手该项目。vue管理台的模板大家应该见过不少，所以我这篇文章一些基础的东西不会介绍，只总结自己认为比较重要的和实际工作中的一些操作。


### 初衷
 > 这是本人的第一篇博客，其主要目的有两个。一：帮助自己思考和加深项目中一些技能点。二：作为一个程序员，在一路前行的路上有很多帮助过我的人，在这里感谢他们；如果这篇博客对于你有一丁点的帮助或者受益，深表欣慰。

图
### 目录结构
```js
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // api管理
│   ├── components             // 全局公用组件
│   ├── config                 // axios常量等配置
│   ├── filters                // 过滤器
│   ├── plugins                // 公共方法
│   ├── router                 // 登录路由
│   ├── store                  // 项目vuex数据仓库
│   ├── utils                  // 工具类
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化
├── static                     // 第三方不打包资源
├── .babelrc                   // babel-loader 配置
├── .gitignore                 // git 忽略项
├── eslintrc.js                // eslint 配置项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
├── package.json               // 包依赖配置
└── README.md                  // 说明文件
```
### 路由拦截

    相信每个项目的路由拦截可能都有细微的差别，下面是我项目中用到的
    1.处理低版本浏览器
    2.仓库中没有token,并且要去的页面不是登陆页，跳转到登陆页
    3.权限页面控制和404

```js
router.beforeEach((to, from, next) => {
  const meta = to.meta || {};
  const that = Vue.prototype;
  //设置标题
  if (meta.title) {
    document.title = `vue管理系统-${to.meta.title}`;
  }
  //处理低版本浏览器
  if (!isSupport(window, document) && to.name !== "nonsupport") {
    next({
      name: "nonsupport"
    });
  } else {
    //如果没有登陆 并且去的页面不是login 跳转到登陆
    if (!store.getters.auth.token && to.name !== "login") {
      next({ name: "login" });
    } else {
      //权限页面控制
      if (that.permission(meta.auth) || !meta.auth) {
        next();
      } else if (to.name !== "404") {
        next({
          name: "404"
        });
      }
    }
  }
});
```

### 登录

#### 1.正常登陆

      登陆成功，后台返回用户信息，利用vuex储存。

#### 2.钉钉扫码登陆

项目中使用到钉钉登陆，刚开始弄的时候各种查文档，各种坑， 觉得有必要总结一下。详细的用法可以查阅代码，我在这里总结几个关键的点。[钉钉官方文档](https://open-doc.dingtalk.com/microapp/serverapi2/kymkv6)

> 1.钉钉扫码登陆的实质就是将个人钉钉账号与系统账号关联绑定起来。钉钉扫码返回的 code 是唯一的，所以后台会将这个唯一的 code 值在数据库存起来。 2.在申请 appid 时需要填写一个回调地址，这个回调地址是和你项目的地址，一定不要随便填写。由于本地项目我填写的 127.0.0.1 3.关键代码

```js
dingLoginInit(appid) {
      const { origin, pathname } = window.location;
      let REDIRECT_URI = origin + pathname;
       this.$nextTick(() => {
        // 2.扫描二维码
        var hanndleMessage = event => {
          var origin = event.origin;
          if (origin == "https://login.dingtalk.com") {
            //判断是否来自ddLogin扫码事件。event.data是扫码返回
            var redirect_uri = `${REDIRECT_URI}&loginTmpCode=${event.data}`;
            var redirect_uri_check = `https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=${appid}&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=${redirect_uri}`;
            window.location.href = redirect_uri_check;
               // 扫描二维码之后地址栏会出现唯一的code 然后把处理code 详情见created
          }
        };
        if (typeof window.addEventListener != "undefined") {
          window.addEventListener("message", hanndleMessage, false);
        } else if (typeof window.attachEvent != "undefined") {
          window.attachEvent("onmessage", hanndleMessage);
        }
      });
    },
```

### 权限管理

> 权限管理是每个管理系统不可缺少的话题，配置权限管理的方法也有多种，根据各自不用的业务选择不同的方案。在这里总结一下我项目中的权限管理。

#### 1.在路由router.js里面声明权限 (meta.auth)
```js
   {
    path:'pagePermission',
    name:'pagePermission',
    component: lazyLoading('permission/pagePermission',false),
    meta: {
      title: '页面权限',
      auth: [0,1]
       },
    },
```
#### 2.路由拦截中使用permission
```js
if (that.permission(meta.auth) || !meta.auth) {
        next();
}   
```

#### 3.permission.js 
> 用户在登陆之后，store仓库存储每个用户的权限信息resourceIds，然后利用store=>modules=>auth.js中的getPrivileges方法，得到一个value为boolean的privileges对象。
> 在menu.vue中利用 this.permission(meta.auth)控制可查看到的页面。
``` js 
举例：admin账号登陆resourceIds为'1;2'
此时auth.privilege = {
    1:true,
    2:true,
}
所以当我们在meta.auth设置为[0,1]时,只有resourceIds为1的账号能看该页面
```

``` js
import store from '../store'
/**
 * { 权限验证 }
 *
 * @param      {<array>}  support  支持的权限
 * @param      {<array>}  limit    仅限支持的权限
 * @param      {<array>}  have     具备的权限
 */
export default function (support, limit, have) {
  let supportPrivilege = false
  let limitObj = {}
  if (limit) {
    limit.forEach(function (resourceId) {
      limitObj[resourceId] = true
    })
  }
  if (support) {
    if (!Array.isArray(support)) {
      support = [support]
    }
    const auth = store.state.auth.data
    if (auth && auth.privileges) {
      support.forEach(function (privilege) {
        supportPrivilege = supportPrivilege || (!!auth.privileges[privilege])
      })
    }
    if (supportPrivilege && limit) {
      supportPrivilege = false
      support.forEach(function (privilege) {
        supportPrivilege = supportPrivilege || (!!limitObj[privilege])
      })
    }
  }
  return supportPrivilege
}
```

### 项目打包 
#### 发布正式和测试使用不同命令
由于我们项目涉及到很多正式环境和测试环境的链接切换，每次发布正式和测试版本切换很繁琐，所以配置一个打包测试的命令还是很有必要的。本人就有一次将正式版本发布到测试。。。
```
步骤1： 修改package.json下的scripts
"build": "node build/build.js pro",
"build-test": "node build/build.js test"

步骤2： 修改build下的build.js
根据node命令的不同 require也相应不同
const arges = process.argv.slice(2)
let webpackConfigUrl = "./webpack.prod.conf"
if (arges.length && arges[0] == "test") {
  webpackConfigUrl = "./webpack.test.conf"
}
const webpackConfig = require(webpackConfigUrl)

步骤3： 在webpack.prod.conf.js中plugins,新加入TEST: false 
  new webpack.DefinePlugin({
      'process.env': env,
      TEST: false 
    }),


步骤4：新建webpack.test.conf.js中plugins,完全赋值一份 修改TEST:true
  new webpack.DefinePlugin({
      'process.env': env,
      TEST: true 
    }),

步骤5:根据TEST设置地址
我们项目是在常量文件中(config.constant.js)配置的API,根据实际项目变化
    是否是测试环境 true 打包测试环境 false 打包生产环境
    const IS_TEST = TEST
    const BASE_API = `//172.16.16.9${IS_TEST ? "0" : "1"}` 
    Vue.prototype.API = BASE_API
    http.js中axios.defaults.baseURL = Vue.prototype.API


```

### 总结
花了几天时间总算完成了第一篇博客，自己对很多细节又重新梳理了一遍，希望对看到这篇文章的你也有帮忙！欢迎大家留言交流，我都会一一查看并回复。如果有些许帮助的话，github加个star吧，你小小的支持就是我前行的动力！
