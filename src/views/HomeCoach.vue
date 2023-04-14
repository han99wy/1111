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
        <el-button icon="Search" @click="handleSearch(formRef)" />
      </template>
    </el-input>
    <el-radio-group v-model="orderType" @change="handleRadio">
      <el-radio-button label="男" />
      <el-radio-button label="女" />
    </el-radio-group >
      <el-table :data="tableData" border style="width: 100%">
      <el-radio-button></el-radio-button>
      <el-table-column prop="cid" label="教练id" width="160" />
      <el-table-column prop="cname" label="教练名字" width="160" />
      <el-table-column prop="csex" label="教练性别" width="160" />
      <el-table-column prop="cage" label="教练年龄" width="160"/>
      <el-table-column prop="lcount" label="课程节数" width="160"/>
      <el-table-column prop="comment" label="备注" />
    </el-table>
    
    <el-pagination 
    v-model:page-size="pageSize"
    :small=false
    background="background" 
    layout="prev, pager, next" 
    :total="7" 
    :page-count="6"
    :page-size="[5, 10, 15, 20]"
    @current-change="handlePageChange" class="page-pos" />
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { Delete, Plus } from '@element-plus/icons-vue'
import http from '../utils/request';
import { useRouter } from "vue-router"
import { ref, computed, reactive } from 'vue'
import { getCoach, createCoach, deleteCoach, searchCoach, reCoach } from '../api/manage';

const rules = reactive({
   
})
const router = useRouter()
const orderTypes = [
  { label: '男', state: '男' },
  { label: '女', state: '女' },
];
const searchWord = ref('')
const pageSize = ref(6)
const orderType = ref('男')
const dialogVisible = ref(false)
const formRef = ref()
const form = reactive({
  cname: "",
  csex: "",
  cage: "",
  comment: ''
})
const tableData = ref([])

// 分页功能定义
const handleRadio = () => {

}
const handlePageChange = () => {

}


// 增删改查功能
const handeladd = () => {
  dialogVisible.value = true
}


const handleSearch = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      searchCoach(form).then((res) => {
        if (res.data) {
          http.post('/coach/selectById/{id}',form)
          ElMessage.success("成功")
        } else {
          ElMessage.error("失败")
          console.log("error");
        }
      })
    } 
  })
}
const handeldelete = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      deleteCoach(form).then((res) => {
        if (res.data) {
          http.post('/coach/delete/{id}', form)
          ElMessage.success("成功")
        } else {
          ElMessage.error("失败")
          console.log("error");
        }
      })
    }
  })
}

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

getCoach({cname:form.cname,csex:form.csex,cage:form.cage,comment:form.comment,lcount:form.lcount}).then((res)=>{
  if( res.data.length ) {
    tableData.value = res.data
  }
})
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