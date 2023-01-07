import axios from "axios";
import store from "../store";
import { message } from "antd";

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : '',
  rejectUnauthorized: false,
  strictSSL: false,
  timeout: 60000
})

// 拦截器
const pending = []
const cancelToken = axios.CancelToken
const removeRepeatUrl = (ever, isRequest) => {
  for(let p in pending) {
    if(pending[p].u === ever.url + '&' + ever.method) {
      isRequest && pending[p].f();
      pending.splice(p, 1);
    }
  }
}
/* 请求拦截 */
instance.interceptors.request.use((config) => {
  config.url = ~config.url.indexOf('web')? '/syms/auth' + config.url : "/syms/base" + config.url
  config.headers['x-timestamp'] = new Date().getTime().toString();
  config.headers['Content-Type'] = 'application/json;charset=UTF-8'
  config.headers['token'] =  store.getState().login.userInfo.token || '';
  // !config.noInterdict && removeRepeatUrl(config, true)
  // !config.noInterdict && (config.cancelToken = new cancelToken(c => {
  //   pending.push({u: config.url + '&' + config.method, f: c})
  // }))
  // config.headers.token = getToken() || store.state.login.token;
  // config.headers['x-timestamp'] = new Date().getTime().toString();
  // this.queue[url] = true;
  return config;
}, (error) => {
  return Promise.reject(error);
});

// 响应拦截
instance.interceptors.response.use((res) => {
  if(res.status === 200) {
    return res.data
  } else {
    message.error('服务器错误')
    return { }
  }

  // removeRepeatUrl(res.config, false)
  // this.destroy(url);

  // //token失效
  // if (res.data.code == 401) {
  //   if(res.data.message === 'INVALID_REQUESTED_CREDENTIAL') {
  //     FUC.loginOutMsg()
  //     eventBus.$emit('logout',{});
  //   } else {
  //     vm.$message.error(res.data.message);
  //   }
  //   return;
  // }
  // !res.config.isHiddenLoading && eventBus.$emit('onPageLoading', false);
  // return { data, status };
}, (error) => {
  // this.destroy(url);
  // let errorInfo = error.response;
  // eventBus.$emit('onPageLoading', false);
  // error.response && Promise.reject(error.response)
  // if (!errorInfo) {
  //   // 终止的请求不需要打印信息
  //   if (!error.status && !error.message) {
  //     return;
  //   }
  //   // 接口错误信息
  //   const {request: {status}} = error;
  //   if (error.message && error.message.indexOf('Network') != -1) {
  //     return {data: {code: 'network', message: i18n.t('errorCode.network')}, status};
  //   } else {
  //     return {data: {code: 500, message: i18n.t('errorCode.500')}, status};
  //   }
  // } else {
  //   let {data, status} = errorInfo;
  //   if (status === 450 || status === Constant.httpStatusCode['401'] || status === Constant.httpStatusCode['403']) {
  //     if (status === Constant.httpStatusCode['401'] || status === Constant.httpStatusCode['403']) {
  //       // 401 的token失效
  //       if (status === 401 && errorInfo.data.message === 'INVALID_REQUESTED_CREDENTIAL') {
  //         FUC.loginOutMsg()
  //         eventBus.$emit('logout', {});
  //       } else {
  //         vm.$message.error(errorInfo.data.message);
  //       }
  //       return;
  //     }
  //     return {data, status};
  //   } else {
  //     return {data: {code: 500, message: i18n.t('errorCode.500')}, status};
  //   }
  // }
})


export default instance
