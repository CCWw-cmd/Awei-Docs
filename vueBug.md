# Vue3踩坑记录

## inject() can only be used inside setup() or functional components

项目跑的时候显示inject() can only be used inside setup() or functional components，是因为不在setup()内部运行inject，导致报错，看了下代码，是因为没有在setup内执行const router = useRouter()  而useRouter内部执行了inject，所以导致报错，改为在方法内执行const router = useRouter() 就可以解决警告

