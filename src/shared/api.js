import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

export const apis = {
  getJobgroups: () => api.get("/job-groups"),
  // getTags: () => api.get("/api/tags"),
  getTags: () => api.get("/tags"),
  // getSecondTags: (tagCategoryId) => api.get(`/api/tags/${tagCategoryId}`),
  getSecondTags: (tagCategoryId) => api.get(`/secondTags`),
  getAllOpenings: () => api.get("/openings"),
  // getJobGroupOpenings: (jobgroupId) => api.get(`/api/openings/${jobgroupId}`),
  getJobGroupOpenings: (jobgroupId) => api.get(`/jobGroupOpenings`),
  getTagResults: (tagObj) => api.get(`/api`, tagObj),
  getCareerResults: (career) => api.get(`opening/${career}`),
  getOpeningDetail: (openingId) => api.get(`/opening`),
  getRecommendedOpenings: () => api.get("/api/recommend"),
};
