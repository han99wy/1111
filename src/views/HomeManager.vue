<template>
  <div>
    <h2>管理员</h2>
    <el-table :data="tableData"  border style="width: 480px">
      <el-table-column stripe prop="mid" label="管理员id" width="160" />
      <el-table-column stripe prop="mname" label="管理员名" width="160" />
      <el-table-column stripe prop="mpwd" label="管理员密码" width="160" />
    </el-table>
    
  </div>
</template>

<script setup>
import {ref} from "vue"

const tableData = [
  {
    mid: "666",
    mname: "jack",
    mpwd: "xxxxxxxx"
  }
]
</script>

<style lang="scss" scoped></style>