# 编辑器踩坑记录

## VSCode

### md文件保存自动格式化

在setting.json文件里配置上这段代码

```json
 "[markdown]": {
  "editor.wordWrap": "on",
  "editor.quickSuggestions": false,
  "editor.formatOnSave": false
 },
```

