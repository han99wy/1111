import http from "../utils/request";

function loginUser(data){
    return http.post("login/loginUser",data)
}
function loginManager(data){
    return http.post("login/loginManager",data)
}
function logon(data) {
   return http.post("logon/insert",data)
}

export{
    loginManager,
    loginUser,
    logon
}