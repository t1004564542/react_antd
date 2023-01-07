import axios from '../axios/index';

/**
 * @method: 日志事件查询
 * */
export function loggerEvents(data) {
  return axios.request({
    url: '/v1/system/logger/events',
    method: 'post',
    data
  });
}

/**
 * @method: 日志分页查询
 * */
export function loggerPage(data) {
  return axios.request({
    url: '/v1/system/logger/page',
    method: 'post',
    data
  });
}
