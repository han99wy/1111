<template>
    <div>
        <h2>课程信息</h2>
        <el-input v-model="searchWord" placeholder="搜索订单关键词">
            <template #append>
                <el-button icon="Search" @click="handleSearch" />
            </template>
        </el-input>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="lid" label="课程id" width="160" />
            <el-table-column prop="ltime" label="上课时间" width="160" />
            <el-table-column prop="lname" label="课程名称" width="160" />
            <el-table-column prop="cid" label="教练id" />
            <el-table-column prop="price" label="课程价格" />
            <el-table-column prop="comment" label="备注" />
        </el-table>
        <el-pagination small background layout="prev, pager, next" :total="tableData.length" :page-size="pageSize"
            @current-change="handlePageChange" class="page-pos" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
const searchWord = ref('')
const pageSize = ref(2)
    const tableData = [
    {
        lid:"01415",
        ltime:"2023.4.20",
        lname:"拳击",
        cid:"5172",
        price:"$3500",
        Comment:"请在训练的同时保护好自己"
    },{
        lid:"01415",
        ltime:"2023.4.20",
        lname:"瑜伽",
        cid:"5172",
        price:"$3500",
        Comment:"请在训练的同时保护好自己"
    },
    {
        lid:"01415",
        ltime:"2023.4.20",
        lname:"私教",
        cid:"5172",
        price:"$5500",
        Comment:"请在训练的同时保护好自己"
    },
    {
        lid:"01415",
        ltime:"2023.4.20",
        lname:"拳击",
        cid:"5172",
        price:"$3500",
        Comment:""
    },
]
const handleSearch = () => {
}
const handlePageChange = (num) => {
}
</script>

<style lang="scss" scoped>
   .el-table{
    opacity: .8;
   }
   .el-pagination {
  float: right;
  margin-top: 20px;
}

.el-input {
  width: 300px;
  margin-bottom: 30px;
}
</style>