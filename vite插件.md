# vite 插件

## vite-plugin-inspect

> `vite-plugin-inspect` 可以让开发者在浏览器端就可以看到[vue](https://so.csdn.net/so/search?q=vue&spm=1001.2101.3001.7020)文件编译后的代码、vue 文件的相互依赖关系

### 安装

```ts
pnpm i -D vite-plugin-inspect
```

### 配置
```ts
// vite.config.ts
import { defineConfig } from 'vite';
import { codeInspectorPlugin } from 'code-inspector-plugin';
import Inspect from "vite-plugin-inspect";

export default defineConfig({
  plugins: [
   Inspect(), // 加上这一行
  ],
});
```

[具体使用教程](https://blog.csdn.net/qq_45634593/article/details/139617472)

## code-inspector-plugin

> 使用**Alt+Shift**快捷键就可以直接跳转到编辑器源码，非常提效

### 安装

```shell
pnpm add code-inspector-plugin -D
```

### 配置

```ts
// vite.config.js
import { defineConfig } from 'vite';
import { codeInspectorPlugin } from 'code-inspector-plugin';

export default defineConfig({
  plugins: [
    codeInspectorPlugin({
      bundler: 'vite',
    }),
  ],
});
```

[官方使用教程](https://inspector.fe-dev.cn/)
