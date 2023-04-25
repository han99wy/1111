<template>
  <div>
    <h2> 教练信息</h2>
    <div>
      <el-button type="success" :icon="Plus" @click="handeladd">添加</el-button>
      <el-button type="danger" :icon="Delete" @click="handeldelete(formRef)">删除</el-button>
    </div>
    <el-dialog v-model="dialogVisible" title="提示" width="500">
      <el-form :model="form" :rules="rules" ref="formRef" label-width="90px">
        <el-form-item>
          <el-input v-model="form.cname" prop="cname" placeholder="教练姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.csex" prop="csex" placeholder="教练性别"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.cage" prop="cage" placeholder="教练年龄"></el-input>
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
    <el-input v-model="searchWord" placeholder="搜索订单关键词">
      <template #append>
        <el-badge :value="3" class="item" type="danger">
          <el-button icon="Search" @click="handleSearch(formRef)" />
        </el-badge>
      </template>
    </el-input>
    <el-table :data="tableData" border height="250" stripe style="width: 100%">
      <el-table-column width="60">
        <template #default="scope">
          <el-checkbox v-model="scope.row.isChecked" label="" size="large" />
        </template>
      </el-table-column> <el-table-column prop="cid" label="教练id" width="160" />
      <el-table-column prop="cname" label="教练名字" width="160" />
      <el-table-column prop="csex" label="教练性别" width="160" />
      <el-table-column prop="cage" label="教练年龄" width="160" />
      <el-table-column prop="lcount" label="课程节数" width="160" />
      <el-table-column prop="comment" label="备注" />
    </el-table>

    <el-pagination v-model:page-size="pageSize" :small=false background="background" layout="prev, pager, next" :total="7"
      :page-count="6" :page-size="[5, 10, 15, 20]" @current-change="handlePageChange" class="page-pos" />
  </div>
  <el-backtop :bottom="100">
    <div style="
            height: 100%;
            width: 100%;
            background-color: var(--el-bg-color-overlay);
            box-shadow: var(--el-box-shadow-lighter);
            text-align: center;
            line-height: 40px;
            color: #1989fa;
            z-index: 1000;
          ">
      UP
    </div>
  </el-backtop>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { Delete, Plus } from '@element-plus/icons-vue'
import http from '../utils/request';
import { useRouter } from "vue-router"
import { ref, computed, reactive } from 'vue'
import { getCoach, createCoach, deleteCoach, searchCoach, reCoach } from '../api/manage';
const rules = reactive({})
const router = useRouter()
const searchWord = ref('')
const pageSize = ref(6)
const orderType = ref('男')
const dialogVisible = ref(false)
const formRef = ref()
const checked1 = ref(true)
const form = reactive({
  cname: "",
  csex: "",
  cage: "",
  comment: ''
})
const tableData = ref([])

// 分页功能定义
const handleRadio = () => {}
const handlePageChange = () => {}


// 增删改查功能
const handeladd = () => {
  dialogVisible.value = true
}

const handleSearch = (formEl) => {
  // const c = tableData.value = tableData.value.find((v) => v.find((v) => v === searchWord.value))
  const c= tableData.value.filter((v)=>v.searchWord)
  console.log(searchWord);
  searchCoach({ c }).then((res) => { })}

const handeldelete = (formEl) => {
  const id = tableData.value.find((v) => v.isChecked).cid
  deleteCoach({ id }).then((res) => {
    if (res.data) {}
  })}

const onSubmit = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      createCoach(form).then((res) => {
        if (res.data) {
          http.post('/coach/insert', form)
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

getCoach({ cname: form.cname, csex: form.csex, cage: form.cage, comment: form.comment, lcount: form.lcount }).then((res) => {
  if (res.data.length) {
    res.data.forEach(element => {
      element.isChecked = false
    });
    tableData.value = res.data
  }}
)
</script>

<style lang="scss" scoped>
.el-dialog {
  position: relative;
}

.el-dialog .el-button {
  position: absolute;
  right: 30px;
  bottom: 30px;
}

.el-table {
  opacity: .8;
}

.el-pagination {
  float: right;
  margin-top: 20px;
}

.el-input {
  width: 300px;
  margin-bottom: 6px;
}

.el-radio-group {
  float: right;
}

.el-button {
  float: right;
}
</style>