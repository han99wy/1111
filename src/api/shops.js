import http from "../utils/request";
function updateShop(data) {
  //上传文件-文本，文件分别处理，组合传递后端
  const params = new FormData()
  for(let fff in data) {
    if( fff === 'file' && data[fff] === 'origin' ){
      continue;//跳过循环
    }
    if(fff === 'dynamictags') {
      params.append(fff, JSON.stringify(data[fff]))
    }
    else{
      params.append(fff, data[fff])
    }
  }
  return http.post('/shops/update', params, {
    headers: { 'content-type': 'multipart/form-data' },
  })
}
function findShop(data) {
  return http.get('/shops/list', data)
}
export {
  updateShop,
  findShop
}