<template>
    <h1 style="text-align: center;">下面有只🐷</h1>
    <el-image :src="picUrl"></el-image>
    <!-- <el-button>vue组件中</el-button> -->
    <jsx-test name="jsxTest"></jsx-test>
</template>

<script setup lang="ts">
import picUrl from '@/assets/lyn/lyn01.jpg'
import JsxTest from './JsxTest'

</script>