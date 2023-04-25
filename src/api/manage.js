import http from "../utils/request";


//教练
function getCoach (data){
  return http.get("coach/selectAll",data)
}

function createCoach(data){
  return http.post("coach/insert",data)
}

function  deleteCoach(data){
  return http.delete("coach/delete",data)
}

function  searchCoach(data){
  return http.get("coach/selectById",data)
}

function reCoach (data){
  return http.put("coach/update ",data)
}

//器材
function getequment(data){
  return http.get("equipment/selectAll",data)
}

function createEquirment(data){
  return http.post("equipment/insert",data)
}

function  deleteEquipment(data){
  return http.delete("equipment/delete",data)
}

//课程管理
function getLesson (data){
  return http.get("lesson/selectAll",data)
}

function createLesson (data){
  return http.post("lesson/insert",data)
}

function  deleteLesson(data){
  return http.delete("lesson/delete",data)
}
//订单列表
function getOrder (data){
  return http.get("orders/selectAll",data)
}

function createOrder(data){
  return http.post("orders/insert",data)
}

function  deleteOrders(data){
  return http.delete("orders/delete",data)
}
//数据获取
function getuser(data){
  return http.get("user/selectAll")
}

function getvip(data){
  return http.get("vip/selectAll")
}

function getmanager(data){
  return http.get("manager/selectAll")
}
export{
  getCoach,
  createCoach,
  deleteCoach,
  searchCoach,
  reCoach,
  getequment,
  createEquirment,
  getLesson,
  createLesson,
  getOrder,
  createOrder,
  getmanager,
  getuser,
  getvip,
  deleteEquipment,
  deleteLesson,
  deleteOrders
}