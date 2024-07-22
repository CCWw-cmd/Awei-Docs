# TypeScript笔记

## 导出全局类型

有些类型很常用，经常需要导入，这时候就需要定义全局实例类型，不用每次都导入

```typescript
import type { FormInstance } from 'element-plus'

import FileDocument from '@/components/AttachmentPage/FileDocument.vue'



declare global {

  namespace Instance {

    interface Form extends FormInstance { }

    type FileDocument = Instance.FileDocument

  }

}



export { }
```

使用的时候就不用引入文件了，直接可以使用

```vue
const fileRef = ref<Instance.FileDocument>()

const formRef = ref<Instance.Form>()
```

