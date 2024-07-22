# Sass 常用技巧

记录一些 Sass 的语法和常用小技巧

### 全局引入 mixins.css

为避免每个文件都引入 mixins.css，首先先在 vite.config.ts 配置

```ts
css: {
  preprocessorOptions: {
    scss: {
      additionalData: '@use "./src/styles/mixins.scss" as *;', // [!code focus]
      javascriptEnabled: true
    }
  }
}
```

## 常用的 mixins

### 元素大小

```scss
@mixin size($width: 100%, $height: 100%) {
  width: $width;
  height: $height;
}
```

使用：

```scss
@include size(); // width:100%; height:100%;

@include size(100px, 200px); // width:100px; height:200px;
```

### flex

```scss
@mixin flex($justify: center, $align: center) {
  display: flex;
  justify-content: $justify;
  align-items: $align;
}
```

使用：

```scss
@include flex();

@include flex(space-between, flex-end);
```

### 单行文本溢出省略

```scss
@mixin text-overflow() {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
```

### 多行文本溢出省略

```scss
@mixin text-ellipsis($line: 3) {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: $line;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
```