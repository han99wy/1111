<template>
    <div class="all">
        <Menu :active="1"/>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="vid" label="等级id" col="3" />
            <el-table-column prop="level" label="等级级别" col="3" />
            <el-table-column prop="sdate" label="开始日期" col="3" />
            <el-table-column prop="edate" label="结束日期" col="3" />
        </el-table>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router"
import {getvip} from "../api/manage"
import Menu from "../components/Menu.vue"
import { ref } from "vue";
const vid=ref("")
const level=ref("")
const sdate=ref("")
const edate=ref("")
const router=useRouter()
  const tableData = ref([])
  getvip({vid,level,sdate,edate}).then((res)=>{
  if( res.data.length ) {
    tableData.value = res.data
  }
})
</script>

<style lang="scss" scoped></style>