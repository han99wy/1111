import http from "../utils/request";

function getCoach (data){
  return http.get("coach/selectAll",data)
}

function createCoach(data){
  return http.post("coach/insert",data)
}

function  deleteCoach(data){
  return http.delete("coach/delete/{id}",data)
}

function  searchCoach(data){
  return http.get("coach/selectById/{id}",data)
}

function reCoach (data){
  return http.put("coach/update ",data)
}

// function getequment(data){
//   return http.get("",data)
// }

export{
  getCoach,
  createCoach,
  deleteCoach,
  searchCoach,
  reCoach,
  /* getequment */
}