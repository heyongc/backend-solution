import store from '@/store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import locale from 'element-plus/lib/locale/lang/zh-cn'

import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'

// console.log('【locale】', locale)
console.log('【zhCn】', zhCn)
console.log('【en】', en)

// export default (app) => {
//   app.use(ElementPlus, { locale })
// }

export default (app) => {
  app.use(ElementPlus, {
    locale: store.getters.language === 'en' ? en : zhCn
  })
}
