import axios from 'axios';
import { Message } from 'antd';
// 引入mock 数据
import '../mock';

const whiteList = [];

// axios 配置
axios.defaults.timeout = 6000;
axios.defaults.showLoading = true;
axios.defaults.baseURL = '/api/';

// request 拦截器
axios.interceptors.request.use(config => config, err => Promise.reject(err));

// response 拦截器
axios.interceptors.response.use(
  response => {
    // do sth.
    // eslint-disable-next-line
    console.log(response);
    return response;
  },
  error => {
    // eslint-disable-next-line
    console.error(error);
    const { response } = error;
    if (response && response.data) {
      if (response.data.message && whiteList.indexOf(response.config.url) === -1) {
        Message.error(response.data.message);
      }
      return Promise.reject(response.data);
    }
    if (error.code === 'ECONNABORTED') {
      error.message = '请求超时';
    } else {
      error.message = '服务器错误';
    }
    return Promise.reject(error);
  }
);

export default axios;
