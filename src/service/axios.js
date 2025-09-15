import axios from "axios";
import { LocalStorage_Key } from "./localStorage";
import toast from "react-hot-toast";
import { BASE_URL } from "../config";

const Axios = axios.create({
  baseURL: BASE_URL, 
  headers: { "Content-Type": "application/json" },
});

// ✅ Request Interceptor (attach token)
Axios.interceptors.request.use(
  (req) => {
    const token = JSON.parse(localStorage.getItem(LocalStorage_Key?.token || ""));
    req.headers = {
        ...req?.headers,
        Authorization: `Bearer ${token}`,
    }
    return req;
  },
  (error) => {
    console.error('error: ', error);
    Promise.reject(error)
}
);

// ✅ Response Interceptor (handle errors globally)
Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('error: ', error);
    if (error.response?.status === 401) {
      console.warn("Unauthorized - maybe token expired");
      localStorage.removeItem(LocalStorage_Key?.token || "");
    }else{
        toast.error(error?.response?.data?.message);
    }
    return Promise.reject(error);
  }
);

export { Axios }