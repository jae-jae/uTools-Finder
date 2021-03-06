<div align=center>
<img src="https://raw.githubusercontent.com/jae-jae/uTools-Finder/master/app/screenshot.png"/>
</div>

# uTools-Finder
uTools 在 MacOS 下的文件搜索插件, 基于 Vue.js 技术栈，并使用了 MacOS 下的 Spotlight 文件搜索接口。

# 安装

- 下载`.upx`文件: [releases](https://github.com/jae-jae/uTools-Finder/releases)
- 复制或拖入 uTools主输入框中即可以进行安装

# 使用

## 功能关键词
输入下列关键词启动搜索插件
- `finder`
- \`

## 键盘操作

- 方向键 `↑` `↓` : 上下移动选择文件
- 方向键 `→` : 打开选中文件所在位置
- 回车键 `Enter` : 打开选中文件

## 鼠标操作

- 点击文件 ： 打开文件

# 贡献
欢迎来共同维护这个项目。
```shell
# 安装依赖
yarn install

# 开发模式,然后使用 app/plugin.json 文件安装插件
yarn serve

# build,然后使用 dist 目录下的文件打包成插件
yarn build
```

# License

MIT