# token

cookie登录信息


## 第一次登录


前端发这些东西去后端校验

用户名：xie
密码：123

```js
var info = {
    user: 'yao',
    password: 'jasd123213'
}
```
经过加密之后，有这段乱码
```
eyJ1c2VyIjoieWFvIiwicGFzc3dvcmQiOiJqYXNkMTIzMjEzIn0=
```

返回，加密后的乱码给你，往cookie或者本地存储，存这份乱码

token:eyJ1c2VyIjoieWFvIiwicGFzc3dvcmQiOiJqYXNkMTIzMjEzIn0=

这段乱码其实包含的是你的所有登录信息，第二次的登录之后，都只需要传这段乱码过去登录就可以了，不需要客户再输入用户名密码

发到后端，然后后端

