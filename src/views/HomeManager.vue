<template>
  <div>

    <Menu :active="0"/>
    <el-table :data="tableData"  border style="width: 480px">
      <el-table-column stripe prop="mid" label="管理员id" width="160" />
      <el-table-column stripe prop="mname" label="管理员名" width="160" />
      <el-table-column stripe prop="mpwd" label="管理员密码" width="160" /> 
    </el-table>
    
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
import {getmanager} from "../api/manage"
import Menu from "../components/Menu.vue"
import { ref } from "vue";
const mid=ref("")
const mname=ref("")
const mpwd=ref("")
const router=useRouter()
const tableData = ref([])
getmanager({mid:mid,mname:mname,mpwd:mpwd}).then((res)=>{
  if( res.data.length ) {
    console.log(res.data);
    tableData.value = res.data
  }
})
</script>

<style lang="scss" scoped></style>