#### 融茂IM PHP SDK文档

## 创建对象

```php
use Romosoft\IM\Client;

$client = new Client($project_code, $project_secret);

```

## 为用户注册IM账号

```php
$user = $client->register($avatar, $nickname, $username)
```

| 参数       | 说明  |
|----------|-----|
| avatar   | 头像  |
| nickname | 昵称  |
| username | 用户名 |

## 用户登录-获得Token【请存储用户token，以防频繁登录】

```php
$token = $client->login($username)
```

| 参数       | 说明  |
|----------|-----|
| username | 用户名 |

## 创建群组

```php
$group = $client->createGroup($username, $avatar, $groupName)
```

| 参数        | 说明    |
|-----------|-------|
| username  | 群主用户名 |
| avatar    | 头像    |
| groupName | 群组名称  |

## 群组中添加用户

```php
$client->joinGroup($username, $groupCode)
```

| 参数        | 说明             |
|-----------|----------------|
| username  | 用户名            |
| groupCode | 群组code，创建群组的回执 |
