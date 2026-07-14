import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const AI_API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export default API;