import axios from 'axios'

// axios 配置
axios.defaults.timeout = 3000;
axios.defaults.baseURL = 'https://api.github.com';


// http request 拦截器
axios.interceptors.request.use(conf => {
    if (localStorage.token) {
        conf.headers.Authorization = localStorage.token
    }
    return conf
})

// http response 拦截器
axios.interceptors.response.use(response => {
    if (!response) {

    }
    return response
}, error => {
    return Promise.reject(error)
})

export default axios