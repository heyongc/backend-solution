<!-- <template>
  <div class="">个人中心</div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped></style> -->

<template>
  <div class="">
    个人中心

    <el-pagination
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000"
    />
  </div>
</template>

<script setup>
import { defineOptions } from 'vue'
defineOptions({ name: 'profile' })
</script>

<script></script>

<style lang="scss" scoped></style>
