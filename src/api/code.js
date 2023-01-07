import axios from '../axios/index';

/**
 * @method: 分页查询
 * */
export function authCodePage(data) {
  return axios.request({
    url: '/v1/authcode/page',
    method: 'post',
    data
  });
}
