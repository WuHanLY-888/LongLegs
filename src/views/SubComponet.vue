<script setup lang="ts">
defineProps<{ text: string }>()
</script>
<template>
  <div>
    {{ text }}
    <el-button type="primary">按钮</el-button>
  </div>
</template>
