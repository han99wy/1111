<template>
    <div>
        <h2>器材表</h2>
        <el-input v-model="searchWord" placeholder="搜索订单关键词">
            <template #append>
                <el-button icon="Search" @click="handleSearch" />
            </template>
        </el-input>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="qid" label="器材id" width="160" />
            <el-table-column prop="lname" label="器材名字" width="200" />
            <el-table-column prop="lnumber" label="器材名字" width="200" />
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
        qid: "05",
        lname: "杠铃",
        lnumber: '20',
        Comment: ""
    }
]
const handleSearch = () => {
}
const handlePageChange = (num) => {
  //console.log(num) // 1 2 3 ... 
  tablePageData.value = tableData.value.filter((v, index) => (num - 1) * pageSize.value <= index && num * pageSize.value > index)
}
</script>

<style lang="scss" scoped>
.el-table {
    opacity: .8;
    text-align: center;
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