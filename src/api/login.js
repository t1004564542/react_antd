import axios from '../axios/index';
/* 登录 */
export function login(data) {
  return axios.request({
    url: '/v1/system/login',
    method: 'post',
    data
  });
}

/* aes加密 */
export function getEncryptedString (data) {
  return axios.request({
    url: "/web/getencryptedstring",
    method: 'post',
    data
  });
}

/* 获取验证码 */
export function randomImage (data) {
  return axios.request({
    url: "/web/randomimage",
    method: 'post',
    data
  });
}

/* 登出 */
export function loginOut (data) {
  return axios.request({
    url: "/v1/system/logout",
    method: 'post',
    data
  });
}
