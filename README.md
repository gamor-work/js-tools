# Tree-tools

## 涉及技术

1. rimraf 清理项目中的文件夹/文件
2. typescript
3. rollup
4. @rollup/plugin-node-resolve
5. rollup-plugin-peer-deps-external 打包过程中，将 peerDeendencies 从打包过程中排除掉，从而避免这些问题
6. @rollup/plugin-commonjs 解析 commonjs 模块
7. rollup-plugin-babel 代码转换，Polyfill 支持，配置灵活，性能优化
8. rollup-plugin-terser 用于代码混淆和代码体积压缩
9. rollup-plugin-typescript2 更轻松的在项目中使用 typescript 语言编写模块，提高开发效率和代码质量
10. prettier 美化代码
11. eslint 编码风格统一，编码风格校验

@rollup/plugin-node-resolve 是 rollup.js 的一个插件，用于解析和导入 Node.js 模块依赖关系。它的作用是帮助 rollup.js 在打包过程中，找到并处理项目中使用的 Node.js 模块。

1. 解析模块路径
2. 处理模块的不同格式
3. 导入外部模块

如何在项目中使用 prettier ??
