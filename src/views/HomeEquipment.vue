<template>
  <div>
    <h2>器材表</h2>

    <div>
      <el-button type="success" :icon="Plus" @click="handeladd">添加</el-button>
      <el-button type="danger" :icon="Delete" @click="handeldelete(formRef)">删除</el-button>
    </div>
    <el-input v-model="searchWord" placeholder="搜索订单关键词">
      <template #append>
        <el-badge :value="6" class="item" type="primary">
          <el-button icon="Search" @click="handleSearch" />
        </el-badge>
      </template>
    </el-input>

    <el-dialog v-model="dialogVisible" title="提示" width="500">
      <el-form :model="form" :rules="rules" ref="formRef" label-width="90px">
        <el-form-item>
          <el-input v-model="form.qid" prop="qid" placeholder="器材id"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.qname" prop="qname" placeholder="教练名字"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.qnumber" prop="qnumber" placeholder="教练数量"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.comment" prop="comment" placeholder="备注"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="onSubmit(formRef)">添加</el-button>
        </span>
      </template>
    </el-dialog>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column width="60">
        <template #default="scope">
          <el-checkbox v-model="scope.row.isChecked" label="" size="large" />
        </template>
       </el-table-column>
        <el-table-column prop="qid" label="器材id" width="160" />
        <el-table-column prop="qname" label="器材名字" width="200" />
        <el-table-column prop="qnumber" label="器材数量" width="200" />
        <el-table-column prop="comment" label="备注" />
    </el-table>
    <el-pagination v-model:page-size="pageSize" :small=false background="background" layout="prev, pager, next" :total="7"
      :page-count="6" :page-size="[5, 10, 15, 20]" @current-change="handlePageChange" class="page-pos" />
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { Delete, Plus } from "@element-plus/icons-vue"
import http from '../utils/request';
import { useRouter } from "vue-router"
import { ref, reactive } from 'vue';
import { getequment, createEquirment,deleteEquipment } from "../api/manage"
const router = useRouter()
const searchWord = ref('')
const pageSize = ref(2)
const handleSearch = () => { }
const handlePageChange = () => { }
const rules = reactive({})
const formRef = ref()
const dialogVisible = ref(false)
const checked1 = ref(true)
const form = reactive({
  qid: "",
  qname: "",
  qnumber: "",
  comment: ''
})
const tableData = ref([])
const handleRadio = () => { }
const handeladd = () => {
  dialogVisible.value = true
}

const handeldelete = (formEl) => {
  const id = tableData.value.find((v) => v.isChecked).cid
  deleteEquipment({ id }).then((res) => {
    if (res.data) {}
  })}

const onSubmit = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      createEquirment(form).then((res) => {
        if (res.data) {
          http.post('/equipment/insert', form)
          ElMessage.success("成功")
          dialogVisible.value = false
        } else {
          ElMessage.error("失败")
          console.log("error");
        }
      })
    }
  })
}

getequment({ qid: form.qid, qname: form.qname, qnumber: form.qnumber, comment: form.comment }).then((res) => {
  if (res.data.length) {
    tableData.value = res.data
  }
})
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

.el-dialog {
  position: relative;
}

.el-dialog .el-button {
  position: absolute;
  right: 30px;
  bottom: 30px;
}

.el-radio-group {
  float: right;
}

.el-button {
  float: right;
}
</style>