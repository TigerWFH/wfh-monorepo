# lerna命令

# 设置lerna项目共用顶层的node_modules
```js
    // lerna.json
    {
        "npmClient": "yarn",
        "useWorkspaces": true
    }
    // package.json
    {
        "workspaces": [
            "packages/*"
        ]
    }
    // 类似 lerna bootstrap -use-workspaces
```
# lerna create：添加模块
# lerna add: 该命令不会再根目录的package.json写入依赖记录，需要直接使用yarn命令
```js
/**
 * 用yarn workspace特性替代lerna bootstrap
 * 安装所有依赖：yarn
 * 
 * 根（项目）目录安装依赖：yarn add -D -W <packageName>，使用workspace模式安装必须使用-W参数
 * 
 * 给package安装外部依赖包：yarn workspace package/name add  XXX 
 * 给package安装内部依赖包：yarn workspace package/name add XXX(依赖当前monorepo中的包)
 *  
 * 清除依赖：lerna clean && rm -rf ./node_modules
 **/ 
```