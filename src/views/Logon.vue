<template>
  <div class="wrap">
    <div class="particle-wave" ref="particle">
      <el-form :model="form" :rules="rules" ref="formRef" label-width="120px" status-icon>
        <el-form-item label="用户名" prop="uname">
          <el-input v-model="form.uname" />
        </el-form-item>
        <el-form-item label="性别" prop="usex">
          <el-input v-model="form.usex" />
        </el-form-item>
        <el-form-item label="手机号" prop="uphone">
          <el-input v-model="form.uphone" />
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="form.pwd" />
        </el-form-item>
        <el-form-item label="重复密码" prop="repwd">
          <el-input v-model="form.repwd" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(formRef)">注册</el-button>
          <el-button type="danger"><a href="/login">返回登录</a></el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { reactive, ref } from 'vue'
import { logon } from "@/api/user"
import {useRouter} from "vue-router"
import http from '../utils/request';

const telephone = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/
const pwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\\W]{6,18}$/
const uname = /^[a-zA-Z0-9_-]{4,16}$/
const formRef = ref()
const router=useRouter()
const form = reactive({
  uname: '',
  pwd: '',
  repwd: '',
  usex: "",
  uphone: ""
})

const rules = reactive({
  uphone: [
    { required: true, message: '手机号不能为空', trigger: 'blur' },
    { pattern: telephone, message: '请输入正确的手机号', trigger: 'blur' }
  ],
  pwd: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { pattern: pwd, message: '请输入8位验证码含数字字母下划线', trigger: 'blur' },
  ],
  repwd: [
    { required: true, message: '重复密码不能为空', trigger: 'blur' },
    { pattern: pwd, message: '请输入8位验证码含数字字母下划线', trigger: 'blur' },
  ],
  uname: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    { pattern: uname, message: '请输入符合要求的用户名', trigger: 'blur' },
  ]
})

const onSubmit = (formEl) => {
  if (!formEl) return
  formEl.validate((valid, fields) => {
    if (valid) {
      logon(form).then((res) => {
        if (res.data) {
          http.post('/logon/insert',form)
          ElMessage.success("成功")
          router.push('/login')
        } else {
          ElMessage.error("失败")
          console.log("error");
        }
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style lang="scss" scoped>
.particle-wave {
  margin: auto;
  text-align: center;
  
  .el-form {
    margin: auto;
    padding-top: 80px;
    height: 500px;
    width: 500px;
  }
}
.wrap{
  background:url(https://p1.meituan.net/dpdeal/ff36f3e5e6340f249c63cd7e09358a531917046.jpg)no-repeat;
  background-size: cover;
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
  opacity: 1;
}
</style>