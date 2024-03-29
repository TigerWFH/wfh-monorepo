# lerna

- lerna 默认使用 npm workspaces
- lerna 有自己的依赖处理方案：lerna bootstrap，被弃用。引入初衷是因为 npm 等包管理工具最初没有 workspaces 概念
- lerna 由 Nx 驱动，可以通过 npx nx graph 查看依赖图

## lerna 命令

- `npx nx graph`to open the visualization
- `npx lerna run build`to build all projects
- `npx lerna run test`to test all projects
- `npx lerna add-caching`config workspaces
- `npx lerna test --scope=projectName`to test projectName
- `npx lerna publish --no-private`自带发包命令
- `lerna version`
- `lerna list`
- `lerna changed`
- `lerna diff`
- `lerna exec`
- `lerna run`
- `lerna init`
- `lerna add`lerna add <package>[@version] [--dev] [--exact] [--peer]
  > add package as dependency to packages in the current lerna repo,only one dependency can be added
  >
  > --dev, --exact, --peer, --registry <url>, --no-bootstrap
  ```shell
  lerna add module-1 packages/prefix-*
  lerna add module-1 --scope=module-2
  lerna add module-1 --scope=module-2 --peer
  lerna add module-1
  <!-- Install babel-core in all modules -->
  lerna add babel-core
  ```
- `lerna clean`
- `lerna import`
- `lerna link`
- `lerna create`lerna create <name> [loc]
  > create a new lerna-managed package
- `lerna repair`
- `lerna watch`
- ``

### lerna 选项

- `--scope <glob>`：
- `--ignore <glob>`：
- `--no-private <glob>`：
- `--since <glob>`：
- `--exlude-dependents`：
- `--include-dependents`：
- `--include-dependencies`：
- `--include-merged-tags`：
