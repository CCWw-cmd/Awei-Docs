# 小程序bug记录

## view标签文字溢出不会自动换行

css代码需要这样写

```css
width: 100%;
word-wrap: break-word;
word-break: break-all;
white-space: pre-line;
```

