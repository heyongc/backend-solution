<template>
  <el-config-provider :locale="store.getters.language === 'en' ? en : zhCn">
    <RouterView />
  </el-config-provider>
</template>

<script setup>
// import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/dist/locale/en.mjs'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import { useStore } from 'vuex'
import { defineOptions } from 'vue'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'
import { watchSwitchLang } from './utils/i18n'

defineOptions({
  name: 'app'
})

const store = useStore()
generateNewStyle(store.getters.mainColor).then((newStyleText) => {
  writeNewStyle(newStyleText)
})

/**
 * 监听语言变化，重新获取个人信息
 */
watchSwitchLang(() => {
  if (store.getters.token) {
    store.dispatch('user/getUserInfo')
  }
})
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
