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
            <el-table-column prop="qname" label="器材名字" width="200" />
            <el-table-column prop="qnumber" label="器材名字" width="200" />
            <el-table-column prop="comment" label="备注" />
        </el-table>
    
    </div>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import http from '../utils/request';
import { useRouter } from "vue-router"
import { ref,reactive} from 'vue';

const searchWord = ref('')
const pageSize = ref(2)
const tableData = ref([])
const handleSearch = () => {}
const handlePageChange = () => {}


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