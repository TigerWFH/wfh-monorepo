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
