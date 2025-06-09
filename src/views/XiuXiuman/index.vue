<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <top-menu></top-menu>
            </el-header>
            <el-main class="pageMain">
                <router-view />
            </el-main>
            <el-footer>
                <Footer></Footer>
            </el-footer>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import TopMenu from './TopMenu.vue'
import Footer from './Footer.vue'
</script>

<style lang="scss">
.pageMain {
    min-height: calc(100vh - 210px);
}
</style>