# Vue3踩坑记录

## inject() can only be used inside setup() or functional components

项目跑的时候显示inject() can only be used inside setup() or functional components，是因为不在setup()内部运行inject，导致报错，看了下代码，是因为没有在setup内执行const router = useRouter()  而useRouter内部执行了inject，所以导致报错，改为在方法内执行const router = useRouter() 就可以解决警告

## 刷新页面出现[Vue Router warn]: No match found for location with path警告

最开始项目刷新页面出现警告，然后无法进入页面，查询资料已通过下面方式解决，至此记录下

首先静态路由里面增加404路由

```ts
  // @ts-ignore 
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/Error/404.vue'),
    meta: {
      hidden: true,
      title: '404',
      noTagsView: true
    },
  },
```

❗❗❗要注意不能写name，否则会刷新默认跳转到404页面
