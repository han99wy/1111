<template>
    <div>
        <h2>vip登记表</h2>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="vid" label="等级id" col="3" />
            <el-table-column prop="level" label="等级级别" col="3" />
            <el-table-column prop="sdate" label="开始日期" col="3" />
            <el-table-column prop="edate" label="结束日期" col="3" />
        </el-table>
    </div>
</template>

<script setup>
  const tableData = [
    {
      vid:"03",
      level:"3",
      sdata:"2023.10.11",
      edata:"2024.10.11"
    }
]
</script>

<style lang="scss" scoped>

</style>