import axios from 'axios';
import config from './config/config';
import mock from './mock';
import Vue from 'vue';

if (!config.debug.mock) {
  mock.restore();
}

let http = axios.create({
  baseURL: config.baseUrl,
  timeout: 1000
  // headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
});
http.interceptors.request.use(
  function(request) {
    return request;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
http.interceptors.response.use(
  function(response) {
    const request = response.config;
    if (config.debug.http) {
      console.debug(
        '>>>',
        request.method.toUpperCase(),
        request.url,
        request.params,
        '\n   ',
        response.status,
        response.data
      );
    }
    return response;
  },
  function(error) {
    if (config.debug.http) {
      let { response, config: request } = error;
      if (request) {
        console.debug(
          '>>>',
          request.method.toUpperCase(),
          request.url,
          request.params,
          '\n   ',
          response.status,
          response.data
        );
      }
    }
    // Do something with response error
    return Promise.reject(error);
  }
);

Vue.prototype.$http = http;
