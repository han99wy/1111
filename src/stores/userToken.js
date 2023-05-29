import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserTokenStore = defineStore('userToken', () => {
  const token = ref('')
  const username=ref("")
  const uname=ref("")
  const pwd=ref("")

  function updateToken(payload) {
    token.value = payload
  }
  function clearToken(){
    token.value=""
  }
  function udpateUname(payload) {
    uname.value = payload
  }
  function udpatePwd(payload) {
    pwd.value = payload
  }
  function udpateUsername(payload) {
    username.value = payload
  }
  return { token, username, updateToken, udpateUname ,clearToken,udpatePwd,udpateUsername}
}, {
  persist: {
    paths: ['token',"uname","pwd"]
  }
})
