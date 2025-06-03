<script lang="ts" setup>

import { useDemoStore } from '@/store/demo'

const demo = useDemoStore()

defineProps<{
    count: number
}>()
</script>

<template>
    <h1>Hello, demo Components</h1>
    <div>count:{{ count }}</div>
    <div style="display: flex;">
        <div v-for="rawItem in demo.rawItems">{{ rawItem }} &nbsp;</div>
    </div>
</template>