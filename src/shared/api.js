import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

export const apis = {
  getJobGroups: () => api.get("/api/job-groups"),
  getTags: () => api.get("/api/"),
  getAllOpenings: () => api.get("/openings"),
  getJobGroupOpenings: (jobgroupId) => api.get(`/api/openings/${jobgroupId}`),
  getTagResults: (tagCategoryId) => api.get(`/api/tags/${tagCategoryId}`),
  getCareerResults: (career) => api.get(`/api/opening/${career}`),
  getOpeningDetail: (openingId) => api.get(`/api/opening/${openingId}`),
  getRecommendedOpenings: () => api.get("/api/recommend"),
};
