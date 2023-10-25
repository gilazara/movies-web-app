import axios from "axios";
import { ACCESS_TOKEN, API_URL } from "src/utils/config";

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (cfg) => {
    cfg.headers["Authorization"] = `Bearer ${ACCESS_TOKEN}`;

    return cfg;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
