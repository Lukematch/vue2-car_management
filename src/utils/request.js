import axios from 'axios'

const instance = axios.create({
  // baseURL:'http://tech.wolfcode.cn:23683',
  baseURL:'https://www.mxnzp.com/api',
  timeout:50000
})

// 请求拦截器
instance.interceptors.request.use(config=>{
  return config
},err=>{
  throw new Error(err)
})
// 响应拦截器
instance.interceptors.response.use(res=>{
  return res.data
},err=>{
  throw new Error(err)
})
export default instance
