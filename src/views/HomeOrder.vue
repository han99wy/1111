<template>
    <div>
        <h2>订单表</h2>
        <div>
            <el-button type="success" :icon="Plus" @click="handeladd">添加</el-button>
            <el-button type="danger" :icon="Delete" @click="handeldelete(formRef)">删除</el-button>
        </div>
        <el-dialog v-model="dialogVisible" title="提示" width="500">
            <el-form :model="form" :rules="rules" ref="formRef" label-width="90px">
                <el-form-item>
                    <el-input v-model="form.did" prop="did" placeholder="订单id"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.lid" prop="lid" placeholder="课程id"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.time" prop="time" placeholder="订单时间"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.vid" prop="vid" placeholder="等级id"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.vid" prop="amount" placeholder="最终价格"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.vid" prop="uid" placeholder="用户名字"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="onSubmit(formRef)">添加</el-button>
                </span>
            </template>
        </el-dialog>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="did" label="订单id" width="160" />
            <el-table-column prop="lid" label="课程ID" width="160" />
            <el-table-column prop="time" label="订单时间" width="160" />
            <el-table-column prop="vid" label="等级id" />
            <el-table-column prop="amount" label="最终价格" />
            <el-table-column prop="uid" label="用户名字" />
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
import { getOrder,createOrder } from '../api/manage';
const rules = reactive({
   
})
const searchWord = ref('')
const pageSize = ref(6)
const dialogVisible = ref(false)
const formRef = ref()
const router = useRouter()
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

const handeladd = () => {
  dialogVisible.value = true
}
const onSubmit = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      createOrder(form).then((res) => {
        if (res.data) {
          http.post('/orders/insert', form)
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

getOrder({did:form.did,lid:form.lid,time:form.time,vid:form.vid,amount:form.amount,uid:form.uid}).then((res)=>{
  if( res.data.length ) {
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