# whistle.autohq

## 本地调试方法
1. 创建目录mkdir whistle.plugins
2. cd whistle.plugins/，然后git clone whistle.autohq代码下来
3. cd whistle.autohq/，然后yarn安装node_modules
4. cd whistle.autohq/page/，yarn安装node_modules（跟上一步没有重复），然后yarn build
5. cd whistle.plugins/，然后w2 run，就可以启动whistle，并看到插件了