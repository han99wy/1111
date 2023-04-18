<template>
    <div>
      <Menu :active="2"/>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="uid" label="用户id" width="160" />
            <el-table-column prop="uname" label="用户名字" width="160" />
            <el-table-column prop="usex" label="用户性别" width="160" />
            <el-table-column prop="uphone" label="用户电话" />
            <el-table-column prop="lid" label="课程id" />
            <el-table-column prop="upwd" label="用户密码" />
            <el-table-column prop="vid" label="等级id" />
        </el-table>
    </div>
</template>

<script setup>

import { useRouter } from "vue-router"
import {getuser} from "../api/manage"
import Menu from "../components/Menu.vue"
import { ref } from "vue";
const uid =ref("")
const uname=ref("")
const usex=ref("")
const uphone=ref("")
const lid=ref("")
const upwd=ref("")
const vid=ref("")
const router=useRouter()
  const tableData = ref([])
  getuser({uid,uname,usex,uphone,lid,upwd,vid}).then((res)=>{
  if( res.data.length ) {
    tableData.value = res.data
  }
})
</script>

<style lang="scss" scoped>
.el-table{
    opacity: .8;
   }
</style>