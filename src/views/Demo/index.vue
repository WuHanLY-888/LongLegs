<script lang="ts" setup>
import { ref } from 'vue'
import { useDemoStore } from '@/store/demo'

import SubComponet from './Components/SubComp.vue'

const demo = useDemoStore()
const count = ref<number>(0)

const addCount = () => {
    count.value += 1
}
</script>

<template>
    <h1>Hello, demo Pages</h1>
    <el-button @click="addCount">增加count{{ count.valueOf() }}</el-button>
    <el-button @click="demo.addItem(String(demo.rawItems.length + 1))">增加addItem</el-button>
    <div style="display: flex;">
        <div v-for="rawItem in demo.rawItems">{{ rawItem }} &nbsp;</div>
    </div>
    <SubComponet :count="count.valueOf()" />
</template>