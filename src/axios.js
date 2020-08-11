import axios from "axios"
import {message} from 'ant-design-vue'

axios.defaults.baseURL = "http://localhost:9000/share/"
axios.interceptors.request.use(config => {
    return config;
});
axios.interceptors.response.use(response => {
    let res = response.data;
    if (res.status === 200) {
        return res;
    } else {
        message.error(res.message);
    }
});