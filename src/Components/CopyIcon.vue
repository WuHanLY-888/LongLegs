<template>
    <div @click="copyText" style="cursor: pointer; font-size: 12px;" title="点击复制">
        <span v-if="copied">
            <el-icon color="#72C240">
                <Select />
            </el-icon>
        </span>
        <span v-else>
            <el-icon>
                <CopyDocument />
            </el-icon>
        </span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Select, CopyDocument } from '@element-plus/icons-vue'
import { useClipboard } from '@vueuse/core' // 推荐使用 vueuse 的 clipboard，兼容性更好

const props = defineProps<{
    text: string
}>()

const copied = ref(false)
const { copy } = useClipboard() // 来自 @vueuse/core

const copyText = async () => {
    try {
        await copy(props.text)
        copied.value = true
        ElMessage.success('复制成功！')
        setTimeout(() => {
            copied.value = false
        }, 3000)
    } catch (e) {
        console.error('复制失败', e)
    }
}
</script>