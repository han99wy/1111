<template>
    <div>
        <h2>管理员</h2>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="mid" label="管理员id" col="4" />
            <el-table-column prop="mname" label="管理员名" col="4" />
            <el-table-column prop="mpwd" label="管理员密码" col="4" />
        </el-table>
    </div>
</template>

<script setup>
  const tableData = [
  {
    mid:"666",
   mname:"jack",
   mpwd:"xxxxxxxx"
  }
]
</script>

<style lang="scss" scoped></style>