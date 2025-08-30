import axios from 'axios';
import { history } from '../main'

export const DOMAIN_STORE_API = 'http://apistore.cybersoft.edu.vn/api';
export const ACCESS_TOKEN = 'accessToken';
export const USER_LOGIN = 'userLogin';


// Viết hàm lưu localStorage và cookies
export const setStoreJson = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
    setCookie(name, JSON.stringify(data), 30);
};

export const setStoreText = (name, data) => {
    localStorage.setItem(name, data);
    setCookie(name, data, 30);
};

export const getStoreJson = (name) => {
    if (localStorage.getItem(name)) {
        return JSON.parse(localStorage.getItem(name));
    }
    return null
}
export const getStoreText = (name) => {
    if (localStorage.getItem(name)) {
        return localStorage.getItem(name);
    }
    return null;
}



export function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
export function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
export function deleteCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

// Cấu hình http interceptor
export const httpClientStoreApi = axios.create({
    baseURL: DOMAIN_STORE_API,
    timeout: 30000
});

// middleware: Trước khi gửi request đều chạy qua hàm này hoặc trước khi nhận về từ api chạy qua hàm này
httpClientStoreApi.interceptors.request.use((config) => {

    config.headers = {
        ...config.headers,
        Authorization: getStoreText(ACCESS_TOKEN)
    }
    return config;

}, (error) => {
    return Promise.reject(error);
});


httpClientStoreApi.interceptors.response.use((response) => {
    return response;
}, (err) => {
    if (err.response?.status === 403 || err.response?.status === 401) {
        // window.location.href = '/login';
        history.push('/login');
    } else if (err.response?.status === 400 || err.response?.status === 404) {
        history.push('/');
    }
    return Promise.reject(err);
});
/*  ---------------- STATUS CODE -----------------
    ∙ 200 (success): Request gửi đến server → Server xử lý thành công và trả kết quả về
    ∙ 201 (created): Request gửi đến server → Server tạo mới thành công 1 tài nguyên và trả về thông tin tài nguyên đó
    ∙ 400 (bad request): Request gửi đến server → Server kiểm tra thấy dữ liệu gửi lên không hợp lệ (validate) → trả về LỖI
    ∙ 404 (not found): Request gửi đến server → Server không thìm thấy tài nguyên yêu cầu (API không tồn tại)
    ∙ 500 (internal server error): Request gửi đến server → Server xảy ra lỗi trong quá trình xử lý (có thể xảy ra ở cả BE hoặc FE)
        - TH1: FE gửi dữ liệu không đúng định dạng hoặc dữ liệu bị sai format yêu cầu của BE (test swagger hoặc postman)
        - TH2: BE code lỗi nhưng chưa xử lý
    ∙ 401 (unauthorized): Lỗi người dùng chưa đăng nhập hoặc token không hợp lệ
    ∙ 403 (Forbiden): Token chưa đủ quyền truy cập
*/