# 第三方包踩坑记录

## ElementPlus

### element-ui的el-radio怎么在已选中的情况下，再次点击取消选中

 解决方式：触发方法里添加以下代码：e === this.radio2 ? this.radio2 = '' : this.radio2 = e

### el-radio-button @click.native="componentList”触发两次bug

 解决方式：因为是同时触发了input标签和label标签的点击事件，就可以通过$event拿到对应事件的标签
元素，通过加判断阻止其中一个就可以了  

```javascript
// 当是input标签触发的点击事件时，阻止该事件
 if (el.target.tagName === 'INPUT') return 
```



## Jenkins

### docker跑jenkins镜像，安装推荐插件时出现错误An error occurred during installation: No such plugin: cloudbees-folder

解决方式：下载jenkins/jenkins版本的镜像

### docker跑jenkins镜像，安装nodejs插件后无法选择node版本

解决方式：找到hudson.plugins.nodejs.tools.NodeJSInstaller文件，放到安装Jenkins容器内 的/var/jenkins_home/updates目录下，然后重启Jenkins

### jenkins跑前端项目打包的时候提示Cannot find package 'unplugin-auto-import'

解决方式：找到日志对应的依赖，在对应项目里重新用npm安装