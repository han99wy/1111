<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <h2>健身后台管理系统</h2>
                <el-dropdown>
                    <span>
                        欢迎：{{ username }}
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>个人中心</el-dropdown-item>
                            <el-dropdown-item @click="handleout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu active-text-color="#6800aa" background-color="#ffacc9" :default-active="active"
                        text-color="#fff" router>
                        <el-sub-menu index="/home">
                            <template #title>
                                <el-icon>
                                </el-icon>
                                <span>信息管理</span>
                            </template>
                            <el-menu-item index="/home/coach">
                                <el-icon>
                                </el-icon> 教练信息
                            </el-menu-item>
                            <el-menu-item index="/home/order">
                                <el-icon>
                                </el-icon> 订单列表
                            </el-menu-item>
                            <el-menu-item index="/home/lesson">
                                <el-icon>
                                </el-icon> 课程信息
                            </el-menu-item>
                            <el-menu-item index="/home/equipment">
                                <el-icon>
                                </el-icon> 器材列表
                            </el-menu-item>
                            <el-menu-item index="/home/manager">
                                <el-icon>
                                </el-icon> 管理员
                            </el-menu-item>
                            <el-menu-item index="/home/user">
                                <el-icon>
                                </el-icon> 用户管理
                            </el-menu-item>
                            <el-menu-item index="/home/vip">
                                <el-icon>
                                </el-icon> vip登记表
                            </el-menu-item>
                        </el-sub-menu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <el-breadcrumb separator="/">
                        <TransitionGroup name="slide">
                            <el-breadcrumb-item v-for="item in breadcrumbs" :key="item">{{ item }}</el-breadcrumb-item>
                        </TransitionGroup>
                    </el-breadcrumb>
                    <RouterView />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useUserTokenStore } from '../stores/userToken';
import { storeToRefs } from 'pinia';

const route = useRoute()
const userTokenStore = useUserTokenStore()
const { username } = storeToRefs(userTokenStore)
const breadcrumbs = computed(() => route.meta.breadcrumbs)
const active = ref(route.path)
const handleout = () => {
    // userTokenStore.clearToken()
    location.href = '/login'
}
</script>

<style lang="scss" scoped >
* {
    padding: 0;
    margin: 0;
}

.common-layout {
    background: url(https://p1.meituan.net/dpdeal/34266eb34833f5f31d1d2f6d148e9d8a2430338.png)no-repeat;
    background-size: cover;
}

.el-header {
    height: 60px;
    background-color: aquamarine;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.el-menu {
    height: calc(100vh - 60px);
}

.is-active {
    color: white !important;
    background-color: #6896aa;
}

.el-breadcrumb {
    margin-bottom: 20px;
}

.el-aside {
    background-color: #ffacc9;

}

.slide-enter-from {
    opacity: 0;
}

.slide-enter-to {
    opacity: 1;
}

.slide-enter-active {
    transition: 0.5s;
}

.slide-leave-from {
    opacity: 1;
}

.slide-leave-to {
    opacity: 0;
}

.slide-leave-active {
    transition: 0.5s;
}</style>