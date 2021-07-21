import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { apis } from "../../shared/api";

// action type
const TOGGLE_LIKE = "opening/TOGGLE_LIKE";
const GET_JOBGROUPS = "opening/GET_JOBGROUPS";
const GET_TAGS = "opening/GET_TAGS";
const GET_SECOND_TAGS = "opening/GET_SECOND_TAGS";
const GET_ALL_OPENINGS = "opening/GET_ALL_OPENINGS";
const GET_JOBGROUP_OPENINGS = "opening/GET_JOBGROUP_OPENINGS";
const GET_TAG_RESULTS = "opening/GET_TAG_RESULTS";
const GET_CARRER_RESULTS = "opening/GET_CAREER_RESULTS";
const GET_OPENING_DETAIL = "opening/GET_OPENING_DETAIL";
const GET_RECOMMENDED_OPENINGS = "opening/GET_RECOMMENDED_OPENINGS";
const REMOVE_CURRENT_OPENING = "opening/REMOVE_CURRENT_OPENING";

// action creator
const toggleLike = createAction(TOGGLE_LIKE);
const getJobgroups = createAction(GET_JOBGROUPS, (jobgroups) => ({
  jobgroups,
}));
const getTags = createAction(GET_TAGS, (tags) => ({ tags }));
const getSecondTags = createAction(GET_SECOND_TAGS, (secondTags) => ({
  secondTags,
}));
const getAllOpenings = createAction(GET_ALL_OPENINGS, (openings) => ({
  openings,
}));
const getJobgroupOpenings = createAction(GET_JOBGROUP_OPENINGS, (openings) => ({
  openings,
}));
const getTagResults = createAction(GET_TAG_RESULTS, (openings) => ({
  openings,
}));
const getCareerResults = createAction(GET_CARRER_RESULTS);
const getOpeningDetail = createAction(GET_OPENING_DETAIL, (opening) => ({
  opening,
}));
const getRecommendedOpenings = createAction(
  GET_RECOMMENDED_OPENINGS,
  (openings) => ({ openings })
);
export const removeCurrentOpening = createAction(REMOVE_CURRENT_OPENING);

// initialState
const initialState = {
  jobGroups: [],
  tags: [],
  secondTag: [],
  openings: [],
  recommendedOpenings: [],
  currentOpening: {},
};

// thunk
export const getJobgroupsDB =
  () =>
  (dispatch, getState, { history }) => {
    apis
      .getJobgroups()
      .then((res) => dispatch(getJobgroups(res.data)))
      .catch((err) =>
        console.log("직무 그룹 리스트를 불러올 수 없습니다.", err)
      );
  };

export const getTagsDB =
  () =>
  (dispatch, getState, { history }) => {
    apis
      .getTags()
      .then((res) => dispatch(getTags(res.data)))
      .catch((err) => console.log("태그를 불러올 수 없습니다.", err));
  };

export const getSecondTagsDB =
  (tagId) =>
  (dispatch, getState, { history }) => {
    apis
      .getSecondTags(tagId)
      .then((res) => dispatch(getSecondTags(res.data)))
      .catch((err) => console.log("2차 태그를 불러올 수 없습니다.", err));
  };

export const getAllOpeningsDB =
  () =>
  (dispatch, getState, { history }) => {
    apis
      .getAllOpenings()
      .then((res) => dispatch(getAllOpenings(res.data)))
      .catch((err) => console.log("공고 목록을 가져올 수 없습니다.", err));
  };

export const getJobgroupOpeningsDB =
  (jobGroupId) =>
  (dispatch, getState, { history }) => {
    apis
      .getJobGroupOpenings()
      .then((res) => dispatch(getJobgroupOpenings(res.data)))
      .catch((err) =>
        console.log("해당 직무의 공고 목록를 불러올 수 없습니다.", err)
      );
  };

export const getTagResultsDB =
  (tagObj) =>
  (dispatch, getState, { history }) => {
    const { tag1, tag2, tag3 } = tagObj;
    const newTagObj = {
      names: [{ name: tag1 }, { name: tag2 }, { name: tag3 }],
    };
    apis
      .getTagResults(newTagObj)
      .then((res) => dispatch(getTagResults(res.data)))
      .catch((err) => console.log("결과를 불러올 수 없습니다.", err));
  };

export const getOpeningDetailDB =
  (openingId) =>
  (dispatch, getState, { history }) => {
    apis
      .getOpeningDetail(openingId)
      .then((res) => {
        const { data } = res;
        dispatch(getOpeningDetail(data));
      })
      .catch((err) => console.log("공고 내용을 가져올 수 없습니다.", err));
  };

export const getRecommendedOpeningsDB =
  (openingId) =>
  (dispatch, getState, { history }) => {
    apis
      .getRecommendedOpenings(openingId)
      .then((res) => dispatch(getRecommendedOpenings(res.data)))
      .catch((err) => console.log("정보를 불러올 수 없습니다.".err));
  };

export const getCareerResultsDB =
  (career) =>
  (dispatch, getState, { history }) => {
    apis
      .getCareerResults(career)
      .then((res) => dispatch(getCareerResults(res.data)))
      .catch((err) => console.log("결과를 불러올 수 없습니다.", err));
  };

// reducer
export default handleActions(
  {
    [TOGGLE_LIKE]: (state, action) => produce(state, (draft) => {}),
    [GET_TAGS]: (state, action) =>
      produce(state, (draft) => {
        draft.tags = action.payload.tags;
      }),
    [GET_SECOND_TAGS]: (state, action) =>
      produce(state, (draft) => {
        draft.secondTag = action.payload.secondTags;
      }),
    [GET_JOBGROUPS]: (state, action) =>
      produce(state, (draft) => {
        draft.jobGroups = action.payload.jobgroups;
      }),
    [GET_ALL_OPENINGS]: (state, action) =>
      produce(state, (draft) => {
        draft.openings = action.payload.openings;
      }),
    [GET_JOBGROUP_OPENINGS]: (state, action) =>
      produce(state, (draft) => {
        draft.openings = action.payload.openings;
      }),
    [GET_TAG_RESULTS]: (state, action) =>
      produce(state, (draft) => {
        draft.openings = action.payload.openings;
      }),
    [GET_CARRER_RESULTS]: (state, action) =>
      produce(state, (draft) => {
        draft.openings = action.payload.openings;
      }),
    [GET_OPENING_DETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.currentOpening = action.payload.opening;
      }),
    [GET_RECOMMENDED_OPENINGS]: (state, action) =>
      produce(state, (draft) => {
        draft.recommendedOpenings = action.payload.openings;
      }),
    [REMOVE_CURRENT_OPENING]: (state, action) =>
      produce(state, (draft) => {
        draft.currentOpening = {};
      }),
  },
  initialState
);
