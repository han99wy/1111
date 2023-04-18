<template>
    <div>
        <h2>课程信息</h2>
        <div>
            <el-button type="success" :icon="Plus" @click="handeladd">添加</el-button>
            <el-button type="danger" :icon="Delete" @click="handeldelete(formRef)">删除</el-button>
        </div>
        <el-input v-model="searchWord" placeholder="搜索订单关键词">
            <template #append>
              <el-badge :value="1" class="item" type="info">
                <el-button icon="Search" @click="handleSearch" />
              
              </el-badge>
            </template>
        </el-input>

        <el-dialog v-model="dialogVisible" title="提示" width="500">
            <el-form :model="form" :rules="rules" ref="formRef" label-width="90px">
                <el-form-item>
                    <el-input v-model="form.lid" prop="lid" placeholder="课程id"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.ltime" prop="ltime" placeholder="上课时间"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.lname" prop="lname" placeholder="课程名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.cid" prop="cid" placeholder="教练id"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.price" prop="price" placeholder="课程价格"></el-input>
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
        <el-table :data="tableData" height="250" border style="width: 100%">
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
import { ElMessage } from 'element-plus';
import { Delete, Plus } from '@element-plus/icons-vue'
import http from '../utils/request';
import { useRouter } from "vue-router"
import { ref, computed, reactive } from 'vue'
import { getLesson,createLesson } from '../api/manage';
const rules = reactive({})
const router = useRouter()
const searchWord = ref('')
const pageSize = ref(6)
const handleSearch = () => { }

const dialogVisible = ref(false)
const formRef = ref()
const form = reactive({
  lid: "",
  ltime: "",
  lname: "",
  cid: '',
  price:"",
  comment:""
})
const tableData = ref([])

// 分页功能定义
const handleRadio = () => {}
const handlePageChange = () => {}
// 增删改查功能
const handeladd = () => {
  dialogVisible.value = true
}
const onSubmit = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      createLesson(form).then((res) => {
        if (res.data) {
          http.post('/lesson/insert', form)
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

getLesson({lid:form.lid,ltime:form.ltime,cid:form.cid,comment:form.comment,price:form.price,lname:form.lname}).then((res)=>{
  if( res.data.length ) {
    tableData.value = res.data
  }
})
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