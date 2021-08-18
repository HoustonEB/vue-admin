import axios from 'axios';
import { MessageBox } from 'element-ui';

const axiosIns = axios.create({
    baseURL: '/',
    timeout: 7000,
    withCredentials: true,
    headers: { 'custom-header': 'vue-admin' },
    data: {
        firstName: 'Fred'
    },
});
axiosIns.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosIns.interceptors.response.use(function (response) {
    console.log(response, 'response')
    let data = response.data || {};
    if (data.code === 0) {
        if (data.code === 'login') {
            MessageBox.confirm('请登录', '提示', {
                confirmButtonText: '确定',
                type: 'warning'
            }).then(() => {
                window.location.href = '';
            })
        }
        return data;
    } else {
        MessageBox.confirm(data.message, '提示', {
            confirmButtonText: '确定',
            type: 'error'
        })
        return Promise.reject(new Error(data.message || 'Error'))
    }
}, function (error) {
    console.log(error.response, 'error')
    return Promise.reject(error);
});
export const request = axiosIns;





