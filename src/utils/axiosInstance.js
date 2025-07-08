import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://taskduty-backend-3doq.onrender.com/api/task",
});
