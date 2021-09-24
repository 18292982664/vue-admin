import axios from 'axios'
import { message } from 'ant-design-vue';
axios.defaults.timeout = 5000 // 请求超时5秒
axios.defaults.baseURL = '' // 请求base url
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' // 设置post请求是的header信息

if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = ''
} else if (process.env.NODE_ENV == 'debug') {
  axios.defaults.baseURL = ''
} else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = ''
}
axios.interceptors.request.use(config => {
  // 每次发送请求之前判断vuex中是否存在token
  // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
  // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
  // const token = store.state.token;
  // token && (config.headers.Authorization = token);
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  if (response.status === 200) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        message.error('请求错误')
        break
      case 401:
        message.error('未授权，请重新登录')
        break
      case 403:
        message.error('拒绝访问')
        break
      case 404:
        message.error('未找到该资源')
        break
      case 405:
        message.error('请求方法为允许')
        break
      case 408:
        message.error('请求超时')
        break
      case 500:
        message.error('服务器异常')
        break
      case 501:
        message.error('网络未实现')
        break
      case 502:
        message.error('网络错误')
        break
      case 503:
        message.error('服务不可以')
        break
      case 504:
        message.error('网络超时')
        break
      case 505:
        message.error('http版本不支持该请求')
        break
      default:
        message.error(`里阿杰错误${err.response.status}`)
    }
  } else {
    message.error('服务器链接失败')
  }
  return Promise.resolve(err.response)
})

/**
 * GET
 */
export function get(url: string, params: any = {}, headers: any = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params,
      headers: headers
    })
      .then(response => {
        if (response.status == 200) {
          resolve(response.data.data)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}
/**
 * POST
 */
export function post(url: string, data: any = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        if (response.status == 200) {
          resolve(response.data)
        }
      }, err => {
        reject(err)
      })
  })
}
