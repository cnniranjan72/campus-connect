import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Notices
export const getNotices = () => API.get("/notices");
export const createNotice = (notice) =>
  API.post("/notices", notice, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
export const updateNotice = (id, notice) =>
  API.put(`/notices/${id}`, notice, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
export const deleteNotice = (id) =>
  API.delete(`/notices/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });

export default API;
