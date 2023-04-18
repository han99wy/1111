<template>
    <div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545cff"
            text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
            <el-menu-item index="1"><a href="/HomeManager">管理员中心</a></el-menu-item>
            <el-menu-item index="2"><a href="/HomeVip">vip中心</a></el-menu-item>
            <el-menu-item index="3"><a href="/HomeUser">用户中心</a></el-menu-item>
            <el-menu-item index="4"><a href="/">后台首页</a></el-menu-item>

        </el-menu>
    </div>
</template>

<script setup>
import { ref } from "vue"
const activeIndex2 = ref('1')
const handleSelect = () => { }

</script>
   
<style lang="scss" scoped>
</style>