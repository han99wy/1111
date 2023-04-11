<template>
  <div>
    <h2> 教练信息</h2>
    <el-input v-model="searchWord" placeholder="搜索订单关键词">
      <template #append>
        <el-button icon="Search" @click="handleSearch" />
      </template>
    </el-input>
    <el-radio-group v-model="orderType" @change="handleRadio">
      <el-radio-button label="男" />
      <el-radio-button label="女" />
    </el-radio-group>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="教练id" width="160" />
      <el-table-column prop="name" label="教练名字" width="160" />
      <el-table-column prop="sex" label="教练性别" width="160" />
      <el-table-column prop="age" label="教练年龄" />
      <el-table-column prop="comment" label="备注" />
    </el-table>
    <el-pagination small background layout="prev, pager, next" :total="tableData.length" :page-size="pageSize"
      @current-change="handlePageChange" class="page-pos" />
  </div>
</template>

<script setup>
import { ref,computed } from 'vue'
const orderTypes = [
  { label: '男', state: '男' },
  { label: '女', state: '女' },
];
const searchWord = ref('')
const pageSize = ref(2)
const orderType = ref('男')
const orderState = computed(() => orderTypes.find((v) => v.label === orderType.value).state)
const tableData = [
  {
    id: "5173",
    name: "jack",
    sex: "男",
    age: "30"
  }, {
    id: "5173",
    name: "jack",
    sex: "男",
    age: "30",
    comment: "金牌教练，专业30年"
  }, {
    id: "5173",
    name: "jack",
    sex: "男",
    age: "30"
  }, {
    id: "5173",
    name: "jack",
    sex: "男",
    age: "30"
  },
]
const handleRadio = () => {
  tableData.value = tableDataOrigin.filter((v) => v.userstate === orderState.value || '所有' === orderState.value)
  handlePageChange(1)
}
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
}

.el-pagination {
  float: right;
  margin-top: 20px;
}

.el-input {
  width: 300px;
  margin-bottom: 30px;
}
.el-radio-group{
  float: right;
}
</style>