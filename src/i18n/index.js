import { createI18n } from 'vue-i18n'
import mZhLocale from './lang/zh'
import mEnLocale from './lang/en'
import store from '@/store'

console.log('【mZhLocale】', mZhLocale)
console.log('【mEnLocale】', mEnLocale)

const messages = {
  en: {
    msg: {
      test: 'Hello world',
      ...mEnLocale
    }
  },
  zh: {
    msg: {
      test: '你好，世界',
      ...mZhLocale
    }
  }
}

/**
 * 返回当前 lang
 */
function getLanguage() {
  return store && store.getters && store.getters.language
}

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})

console.log('【i18n instance】', i18n)
window._i18n = i18n

export default i18n
