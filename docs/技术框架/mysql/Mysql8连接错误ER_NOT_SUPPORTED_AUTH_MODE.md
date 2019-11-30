---
title: Mysql8连接错误ER_NOT_SUPPORTED_AUTH_MODE
date: 2019-11-29 10:27:26
type: post # type 为 post 的文章会被列入 post list
tag: # 页面的标签
  - mac
  - mysql
footer: MIT Licensed | Copyright © 2019 pengju.li
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: Mysql8连接错误ER_NOT_SUPPORTED_AUTH_MODE
    content: Mysql8连接错误ER_NOT_SUPPORTED_AUTH_MODE
---
## 问题
连接mysql的时候出现了一个奇怪的错误
```
ER_NOT_SUPPORTED_AUTH_MODE
```
## 原因
> “caching_sha2_password”在MySQL 8中是默认的加密方式

## 解决
登录mysql
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
```
如果是mac下面也可以在
```
偏好设置->MySQL->Initializ Database->Use Legacy Password Encryption
```