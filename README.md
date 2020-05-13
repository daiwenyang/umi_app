# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

```
配置路由：
    子路由嵌套
    同级才重定向
    wrappers可用于权限校验，类似vue beforeEach
    父路由向子路由传递属性，react.cloneElement
```

```
约定路由：
    约定路由首先要注释配置路由routes,并且被解析成exact为true
    动态路由文件夹[xxx]
    全局layouts 和局部_layout 区别于嵌套子路由
    根据不同的路由layout组件返回不同的tsx
    404页面构建 
    注意开发模式下有内置 umi 提供的 404 提示页面，所以只有显式访问 /404 才能访问到这个页面
    路由组件静态属性扩展路由信息，例如Component.title="test"
```
