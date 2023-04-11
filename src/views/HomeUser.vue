<template>
    <div>
        <h2>用户信息表</h2>
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
  const tableData = [
    {
      uid:"01716",
      uname:"王大锤",
      usex:"男",
      uphone:"131xxxxxxxx",
      lid:"01919",
      upwd:"xxxxxxx",
      vid:"v1"
    },{
      uid:"01716",
      uname:"王大锤",
      usex:"男",
      uphone:"131xxxxxxxx",
      lid:"01919",
      upwd:"xxxxxxx",
      vid:"v1"
    },{
      uid:"01716",
      uname:"王大锤",
      usex:"男",
      uphone:"131xxxxxxxx",
      lid:"01919",
      upwd:"xxxxxxx",
      vid:"v1"
    },
]
</script>

<style lang="scss" scoped>
.el-table{
    opacity: .8;
   }
</style>