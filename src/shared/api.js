import axios from "axios";

const api = axios.create({
  baseURL: "http://52.79.144.138",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

export const apis = {
  signup: (infoObj) => api.post(`auth/signup`, infoObj),
  like: (openingId) => api.post(`api/openings/${openingId}/likes`),
  dislike: (openingId) => api.put(`api/openings/${openingId}/likes`),
  getJobgroups: () => api.get("/api/job-groups"),
  getTags: () => api.get("/api/tag-categories"),
  getSecondTags: (tagCategoryId) => api.get(`/api/tags/${tagCategoryId}`),
  getAllOpenings: () => api.get("/api/openings"),
  getJobGroupOpenings: (jobgroupId) => api.get(`/api/jobgroup/${jobgroupId}`),
  getTagResults: (tagName) =>
    api.get(`/api/search`, {
      params: {
        tagName,
      },
    }),
  getCareerResults: (career) =>
    api.get(`/api/career/`, {
      params: {
        career,
      },
    }),
  getOpeningDetail: (openingId) => api.get(`/opening`),
  getRecommendedOpenings: () => api.get("/api/recommend"),
};
