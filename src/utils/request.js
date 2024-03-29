//axios封装
import axios from "axios"
import { useUserTokenStore } from '../stores/userToken'

const instance = axios.create({
  baseURL: '/api',
  timeout: 1000,
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  const token = useUserTokenStore().token;
  config.headers.token = token;
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

const http = {
  get(url, data, config) {
    return instance.get(url, {
      params: data
    }, config
    )
  },
  post(url, data, config) {
    return instance.post(url, data, config)
  },
  put(url, data, config) {
    return instance.put(url, data, config)
  },
  patch(url, data, config) {
    return instance.patch(url, data, config)
  },
  delete(url, data, config) {
    return instance.delete(url, { data }, config
    )
  }
}
export default http;