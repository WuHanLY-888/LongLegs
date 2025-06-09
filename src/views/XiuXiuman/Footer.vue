<template>
    <div class="container">
        <el-space direction="vertical" alignment="center">
            <el-space :size="10" :spacer="h(ElDivider, { direction: 'vertical' })">
                <div v-for="i in 2" :key="i">
                    <el-button> button {{ i }} </el-button>
                </div>
                <el-tooltip placement="top">
                    <template #content>
                        <el-space direction="vertical" alignment="start">
                            <el-space>QQ：910002662
                                <CopyIcon text="910002662" />
                            </el-space>

                            <el-space>邮箱：yifeianyi@163.com
                                <CopyIcon text="yifeianyi@163.com" />
                            </el-space>
                        </el-space>
                    </template>
                    联系我们
                </el-tooltip>
            </el-space>
            <el-button>footer</el-button>
            <div class="f">footer</div>
            <div class="f">footer</div>
        </el-space>
    </div>
</template>
<script lang="ts" setup>
import { h } from 'vue'
import { ElDivider } from 'element-plus'

import CopyIcon from '@/Components/CopyIcon.vue'

</script>

<style lang="scss">
.el-footer {
    padding: 0;
}

.container {
    padding: 0;
    background-color: #394150;
    width: 100vw;
    min-height: 150px;

    .el-space {
        width: 100%;
    }
}
</style>