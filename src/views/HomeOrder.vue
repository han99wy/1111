<template>
    <div>
        <h2>订单表</h2>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="did" label="订单id" width="160" />
            <el-table-column prop="lid" label="课程ID" width="160" />
            <el-table-column prop="time" label="订单时间" width="160" />
            <el-table-column prop="vid" label="等级id" />
            <el-table-column prop="amount" label="最终价格" />
            <el-table-column prop="uid" label="用户名字" />
        </el-table>
    </div>
</template>

<script setup>
const tableData = [
    {
        did: "5173",
        lid: "0101524",
        time: "2023.4.20",
        vid: "V3",
        amount: "$2100",
        uid: "张三"
    },{
        did: "5173",
        lid: "0101524",
        time: "2023.4.20",
        vid: "V3",
        amount: "$2100",
        uid: "张三"
    },{
        did: "5173",
        lid: "0101524",
        time: "2023.4.20",
        vid: "V3",
        amount: "$2100",
        uid: "张三"
    },{
        did: "5173",
        lid: "0101524",
        time: "2023.4.20",
        vid: "V3",
        amount: "$2100",
        uid: "张三"
    }
]
</script>

<style lang="scss" scoped></style>