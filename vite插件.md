# vite 插件

## vite-plugin-inspect

> `vite-plugin-inspect` 可以让开发者在浏览器端就可以看到[vue](https://so.csdn.net/so/search?q=vue&spm=1001.2101.3001.7020)文件编译后的代码、vue 文件的相互依赖关系

### 使用

```ts
pnpm i -D vite-plugin-inspect
```

```ts
// vite.config.ts
import Inspect from "vite-plugin-inspect";

export default {
  plugins: [
    Inspect(), // 加上这一行
  ],
};
```

[具体使用教程](https://blog.csdn.net/qq_45634593/article/details/139617472)
