# VSCode 配置

在使用 VSCode 过程中的常用插件和配置推荐

## 插件推荐

### Vue - Official

![image-20240709172149695](public/md_doc_img/image-20240709172149695.png)

提供 vue3 语法提示、代码片段、智能感知、错误检查

默认配置没有对 ref 进行优化，需要在扩展设置中配置

![image-20240709173102183](public/md_doc_img/image-20240709173102183.png)

勾选 Auto Insert

![image-20240709173225521](public/md_doc_img/image-20240709173225521.png)

操作 ref 数据时，自动补全.value

![image-20240709173404599](public/md_doc_img/image-20240709173404599.png)

### HTML-Comment

![image-20240709173633030](public/md_doc_img/image-20240709173633030.png)

html 的注释嵌套使用时都会发现并不能达到我们想到的效果，正常情况以下注释会报错，这时候可以用这个插件来解决这类报错

![image-20240709173633030](public/md_doc_img/cfcc3e34459840afaec821a1de76db99.gif)

原生的方法是不支持这种嵌套注释的，只能使用变种方法进行多级注释，所以可以使用该插件解决，该插件效果如下

![image-20240709173633030](public/md_doc_img/f817fcb5820db2e0281b821f61000b9b.gif)

### Element Plus Snippets

![image-20240715091430893](public/md_doc_img/PixPin_2024-07-15_09-17-53.png)

Element Plus 代码片段

## 配置推荐

个人编辑器配置推荐

### 文件标签栏多行显示

[**操作链接**](https://blog.csdn.net/mj475002864/article/details/115456004)

### 设置代码片段

写代码过程中经常有一些代码需要重复写，这时候使用代码片段来提高效率，只需要输入代码片段的前缀，然后按下 Tab 键即可插入代码片段，按下换行键可以切换到下一个输入点。
![image-20240709173633030](public/md_doc_img/20240712161443.gif)

#### 详细操作教程

[**利用 VS Code 代码片段提高编码效率**](https://fengchao.pro/blog/vscode-snippets/)

#### 个人常用

##### vue3 单页面

```json
{
  "v3page": {
    "scope": "vue",
    "prefix": "v3",
    "body": [
      "<template>",
      "$0    <div>",
      "$4",
      "$0    </div>",
      "</template>",
      "",
      "<script setup lang=\"ts\">",
      "$4",
      "</script>",
      "$4",
      "<style lang=\"scss\" scoped>",
      "$4",
      "</style>"
    ],
    "description": "vue3"
  }
}
```

##### vue3 方法

```json
{
  "v3Fn": {
    "prefix": "v3F",
    "body": ["const ${1} = () => {", "  ${2}", "}"],
    "description": "v3Fn"
  }
}
```

##### Scss 宽高混入

```json
{
  "ScssSize": {
    "prefix": "size",
    "body": ["@include size(${1},${2});"],
    "description": "ScssSize"
  }
}
```

##### Scss Flex

```json
{
  "ScssFlex": {
    "prefix": "flex",
    "body": ["@include flex(${1},${2});"],
    "description": "ScssFlex"
  }
}
```

### 开启内嵌提示

内嵌提示（Inlay Hint）对提升代码阅读效率很重要，建议开启。

#### 具体操作

设置：能勾选的都勾选，能选「all」的都选「all」

settings.json：[language].inlayHints.[what].enabled

#### 效果

默认
![PixPin_2024-07-15_09-21-44.png](public/md_doc_img/PixPin_2024-07-15_09-21-44.png)

开启后
![PixPin_2024-07-15_09-21-59.png](public/md_doc_img/PixPin_2024-07-15_09-21-59.png)

### 快捷键显示类型提示

通过 ctrl+i 快捷键可以触发类型提示

![20240716174750.gif](public/md_doc_img/20240716174750.gif)

如果没有反应的话就是有重复的快捷键了，需要更改快捷键

![image-20240716175032820](public/md_doc_img/image-20240716175032820.png)
