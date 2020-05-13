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

```
插件：
    无
```

```
mock:
    参考官方文档
```

```
环境变量:
    1、根据命令行参数设置；
    2、根据.env文件设置；
    3、cross-env跨端环境变量配置方案；
    4、环境变量list参考官方；
```

```
细节记录：
    图片引入时，如果用别名，需要添加“~”；

```

```
umi进阶：
    1、按需加载，组件过大时，采用dynamic;
    

```

