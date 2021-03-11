# BFF架构

MVC的模式

# 目录改造
+ assets 静态文件图片等
+ config 项目相关配置文件
+ controller 控制器
+ models 模型
+ tests 单元测试 e2e测试 UI测试
+ utils 工具类
+ views 视图相关

# 搭建

## 技术栈

+ Koa 及其相关的一系列的配套依赖中间件等
+ nodemon 监控开发的 node.js 代码变化以重启服务
+ pm2 上线监控 进程守护
+ @koa/router (koa-router)
+ koa-swig (模板)
+ koa-static (静态资源)
+ log4js 日志文件(时间、级别、分类)
+ tree-cli 生成项目目录结构

## webcomponents

> https://blog.csdn.net/meikidd/article/details/44628915

## 工具推荐

+ scripty 
+ jscpd 检查代码重复率