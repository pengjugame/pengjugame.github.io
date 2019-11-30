---
title: Mac-Mysql连接Access-denied-for-user
date: 2019-11-29 10:27:26
type: post # type 为 post 的文章会被列入 post list
tag: # 页面的标签
  - mac
  - mysql
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: Mac-Mysql连接Access-denied-for-user
    content: Mac-Mysql连接Access-denied-for-user
---
## 禁用服务
苹果->系统偏好设置->MySQL，关闭mysql服务
或者
```
sudo /usr/local/mysql/support-files/mysql.server stop 
```
## 进入终端
```
cd /usr/local/mysql/bin/
sudo su
```
## 禁止验证
```
./mysqld_safe --skip-grant-tables &
```
回车以禁止mysql验证功能，mysql会自动重启，偏好设置中的mysql状态会变成running

## 重置密码
新建一个终端窗口(cmd+T)
```
./mysql
flush privileges;
set password for 'root'@'localhost' = password('新密码');
```
如此可以修改成功