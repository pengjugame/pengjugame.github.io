---
title: Mac下mysql重置密码
date: 2019-11-29 10:27:26
type: post # type 为 post 的文章会被列入 post list
tag: # 页面的标签
  - mac
  - mysql
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: Mac下mysql重置密码
    content: Mac下mysql重置密码
---

1. 关闭mysql服务
```
sudo /usr/local/mysql/support-files/mysql.server stop 
```
或者系统偏好里有个 MySQL 里关闭

2.来到mysql目录下
```
cd /usr/local/mysql/bin
```

3.得到权限
```
sudo su
```
4.重启mysql服务
```
./mysqld_safe --skip-grant-tables & 
```
或者在系统编号中开启
5.重开终端 CMD+T
```
mysql -uroot -p （提示输入密码时随便输入即可)
```
6. 拿到权限
```
flush privileges;
```
7.修改密码
```
set password for 'root'@'localhost'=password('新密码');
```
如果不行，使用
```
ALTER USER 'root'@'localhost' IDENTIFIED BY '新密码';
```
