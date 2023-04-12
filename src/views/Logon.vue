<template>
  <div id="background"></div>
  <div id="contain">
    <h1>注册页面</h1>

    <div class="el">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item prop="user">
          <span slot="label">
            <span style="color: black"><strong>用户名</strong></span>
          </span>
          <el-input v-model="ruleForm.user" clearable></el-input>
        </el-form-item>
        <el-form-item prop="mobile">
          <span slot="label">
            <span style="color: black"><strong>手机号码</strong></span>
          </span>
          <el-input v-model="ruleForm.mobile" clearable></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <span slot="label">
            <span style="color: black"><strong>账号密码</strong></span>
          </span>
          <el-input type="password" v-model="ruleForm.pass" clearable></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <span slot="label">
            <span style="color: black"><strong>确认密码</strong></span>
          </span>
          <el-input type="password" v-model="ruleForm.checkPass" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
          <el-button @click="returnForm">返回登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    var checkUser = (rule, value, callback) => {
      const regUser = /^[a-zA-Z0-9_-]{3,16}$/
      if (regUser.test(value)) {
        return callback()
      }
      callback(new Error('用户名不能为空'))
    }
    var checkMobile = (rule, value, callback) => {
      const regUser = /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/
      if (regUser.test(value)) {
        return callback()
      }
      callback(new Error('手机号码不能为空'))
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        user: '',
        mobile: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        user: [{ validator: checkUser, trigger: 'blur' }],
        mobile: [{ validator: checkMobile, trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }]
      }
    }
  },
  methods: {
    returnForm() {
      // 返回login界面
      this.$router.push('/login')
    },
    submitForm() {
      console.log(this.item)
      var data = this.item
      this.$http.post('/api/employee/login', data, { emulateJSON: false }).then(
        (response) => {
          console.log(response.body)
          this.grouplist = response.body
          alert('注册成功！')
          this.$router.push('/login')
        },
        (response) => {
          console.log(response)
          alert('出问题啦！！！')
        }
      )
    }
  }
}


</script>

<style lang="scss" scoped>
#background {
  width: 100%;
  height: 100%;
  background: url("https://img.51miz.com/Photo/01/49/41/63/25afa00e_P1494163_4d9c5755.jpg");
  opacity: .6;
  background-size: 100% 100%;
  position: fixed;
  top: 0;
  left: 0;
}

#contain {
  width: 500px;
  height: 550px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border: 25px;
}

#contain h1 {
  color: rgba(22, 20, 22, 0.815);
  font-size: 60px
}

button {
  position: relative;
  height: 40px;
  width: 100px;
  background: rgba(35, 19, 252, 0.425);
  border-radius: 10px;
  margin-top: 40px;
  box-shadow: none;
  color: white;
  margin-left: 50px;
}

</style>