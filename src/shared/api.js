import axios from "axios";

const api = axios.create({
  baseURL: "http://52.79.144.138",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

export const apis = {
  getJobgroups: () => api.get("/api/job-groups"),
  getTags: () => api.get("/api/tag-categories"),
  getSecondTags: (tagCategoryId) => api.get(`/api/tags/${tagCategoryId}`),
  getAllOpenings: () => api.get("/openings"),
  // getJobGroupOpenings: (jobgroupId) => api.get(`/api/openings/${jobgroupId}`),
  getJobGroupOpenings: (jobgroupId) => api.get(`/jobGroupOpenings`),
  getTagResults: (tagObj) => api.get(`/api`, tagObj),
  getCareerResults: (career) => api.get(`opening/${career}`),
  getOpeningDetail: (openingId) => api.get(`/opening`),
  getRecommendedOpenings: () => api.get("/api/recommend"),
};
