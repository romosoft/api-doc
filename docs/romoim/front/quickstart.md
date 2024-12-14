
#### 在main.js中引入
```js
import im from "@/components/romosoft-im/libs/romoim_uniapp_sdk_1.2.9.js";
Vue.prototype.$im = im;
```

#### 初始化并链接到websocket
```js
this.$im.init(token)    // token 由服务器调用rest api登录生成
    .then(() => {
        // 连接 websocket 并登录成功
    }).catch(err => {
        // 连接 websocket 异常
    })
```

#### 获取聊天(历史)列表
```js
this.$im.api.history_list()
    .then(list => {
        // list 是聊天列表的数组
    })
```

#### 获取聊天（历史）内容
```js
this.to_user = 'tourist2';
let startId = 0;
this.$im.api.histories(this.to_user, startId)
    .then(res => {
        // to_user：当前正在聊天对方用户name
        // startId：需要查询的最大消息Id
    })
```

#### 注册接受消息的回调
```js
this.$im.api.onMessage = (msg) => {
    // console.log(msg)
}
```

#### 发送消息
```js
// msg：发送出去的消息
// to_user: 发送至的name
// type: 消息类型
this.$im.api.sendMsg(msg, this.to_user, this.$im.types.TYPE_TEXT)；
```
