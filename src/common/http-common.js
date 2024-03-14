import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
});

//default url
axiosInstance.defaults.baseURL = 'http://localhost:8000'

export const get = async (url, config = {}) => {
    const res = await axiosInstance.get(url, config);
    return res.data;
};

export const post = async (url, data, config = {}) => {
    const res = await axiosInstance.post(url, data, config);
    return res.data;
};

export const put = async (url, data, config = {}) => {
    const res = await axiosInstance.put(url, data, config);
    return res.data;
};

export const remove = async (url, config = {}) => {
    const res = await axiosInstance.delete(url, config);
    return res.data;
};

export default axiosInstance;
