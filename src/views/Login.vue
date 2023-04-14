<template>
    <div class="particle-wave" ref="particle">
    <el-form :model="form" :rules="rules" ref="formRef" label-width="120px" status-icon>
      <el-form-item label="手机号" prop="username">
        <el-input v-model="form.username" />
      </el-form-item >
      <el-form-item label="密码" prop="pwd">
        <el-input v-model="form.pwd" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(formRef)">登录</el-button>
        <p><a href="/logon">没有账号？点击注册</a></p>
      </el-form-item>
    </el-form>
  </div>
</template>

<script  setup>
import { ElMessage } from 'element-plus';
import { reactive, ref } from 'vue'
import {loginUser}from "@/api/user"
import http from '../utils/request';
import {useRouter} from "vue-router"

const uname=/^[a-zA-Z0-9_-]{4,16}$/
const pwd=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\\W]{6,18}$/
const formRef = ref()
const router=useRouter()
const form = reactive({
  username: '',
  pwd: ''
})

const rules = reactive({
  username:  [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    { pattern: uname , message: '请输入符合要求的用户名', trigger: 'blur' },
  ],
  pwd: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { pattern: pwd , message: '请输入8位验证码含数字字母下划线', trigger: 'blur' },
  ]
})

const onSubmit = (formEl) => {
  if (!formEl) return
  formEl.validate((valid, fields) => {
    if (valid) {
      loginUser(form).then((res)=>{
       if(res.data){
        http.post('/login/loginUser',form)
        console.log(form);
        ElMessage.success("成功")
        router.push('/')
       }else{
        ElMessage.error("失败")
       }
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style scoped>
.particle-wave{
  background:url(https://p1.meituan.net/dpdeal/ff36f3e5e6340f249c63cd7e09358a531917046.jpg)no-repeat;
  background-size: cover;
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
  opacity: 1;
}

.el-form {
  width: 400px;
  margin: auto;
  margin-top: 200px;
}

.el-form a {
  display: block;
  text-decoration: none;
  color: rgb(167, 235, 8);
  margin-left: 8px;
}

</style>