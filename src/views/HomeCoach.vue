<template>
  <div>
    <h2> 教练信息</h2>
    <div>
      <el-button type="success" :icon="Plus" @click="handeladd">添加</el-button>
      <el-button type="danger" :icon="Delete">删除</el-button>
    </div>
    <el-dialog v-model="dialogVisible" title="提示" width="500">
      <el-form :model="form" :rules="rules" ref="formRef" label-width="90px">
        <el-form-item>
          <el-input prop="cid" placeholder="教练id"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input prop="cname" placeholder="教练姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input prop="csex" placeholder="教练性别"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input prop="cage" placeholder="教练年龄"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input prop="comment" placeholder="备注"></el-input>
        </el-form-item>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="onReset(formRef)">重置</el-button>
            <el-button type="primary" @click="onSubmit(formRef)">添加</el-button>
          </span>
        </template>
      </el-form>
    </el-dialog>
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
      <el-table-column prop="cid" label="教练id" width="160" />
      <el-table-column prop="cname" label="教练名字" width="160" />
      <el-table-column prop="csex" label="教练性别" width="160" />
      <el-table-column prop="cage" label="教练年龄" />
      <el-table-column prop="comment" label="备注" />
    </el-table>
    <el-pagination small background layout="prev, pager, next" :total="tableData.length" :page-size="pageSize"
      @current-change="handlePageChange" class="page-pos" />
  </div>
</template>

<script setup>
import { Delete, Plus } from '@element-plus/icons-vue'
import { ref, computed } from 'vue'
const orderTypes = [
  { label: '男', state: '男' },
  { label: '女', state: '女' },
];
const searchWord = ref('')
const pageSize = ref(2)
const orderType = ref('男')
const dialogVisible = ref(false)
const orderState = computed(() => orderTypes.find((v) => v.label === orderType.value).state)
const tableData = [
  {
    cid: "5173",
    cname: "jack",
    csex: "男",
    cage: "30"
  }, {
    cid: "5173",
    cname: "jack",
    csex: "男",
    cage: "30",
    comment: "金牌教练，专业30年"
  }, {
    cid: "5173",
    cname: "jack",
    csex: "男",
    cage: "30"
  }, {
    cid: "5173",
    cname: "jack",
    csex: "男",
    cage: "30"
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
const handeladd=()=>{

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

.el-radio-group {
  float: right;
}

.el-button {
  float: right;
}
</style>