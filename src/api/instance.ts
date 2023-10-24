import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (cfg) => {
    cfg.headers["Authorization"] = `Bearer ${
      import.meta.env.VITE_APP_ACCESS_TOKEN
    }`;

    return cfg;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
