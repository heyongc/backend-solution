module.exports = {
  // 表示当前目录即为根目录，ESLint 规则将被限制在该目录下
  root: true,
  // env 表示启用 ESLint 检测的环境
  env: {
    // 在node环境下启动ESLint检测
    node: true
  },
  // ESLint 中基础配置需要继承的配置
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  // 解析器
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  // 需要修改的启用规则极其各自的错误级别
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // quotes: 'off',
    'space-before-function-paren': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
