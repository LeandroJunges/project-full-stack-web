import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,

  headers: {
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Headers": "Authorization",
    // "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE, OPTIONS",
    "Content-Type": "application/json",
  },
});