import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { apis } from "../../shared/api";

// action type
const TOGGLE_LIKE = "opening/TOGGLE_LIKE";
const GET_JOBGROUPS = "opening/GET_JOBGROUPS";
const GET_TAGS = "opening/GET_TAGS";
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
const getTags = createAction(GET_TAGS);
const getAllOpenings = createAction(GET_ALL_OPENINGS, (openings) => ({
  openings,
}));
const getJobgroupOpenings = createAction(GET_JOBGROUP_OPENINGS, (openings) => ({
  openings,
}));
const getTagResults = createAction(GET_TAG_RESULTS);
const getCareerResults = createAction(GET_CARRER_RESULTS);
const getOpeningDetail = createAction(GET_OPENING_DETAIL, (opening) => ({
  opening,
}));
const getRecommendedOpenings = createAction(GET_RECOMMENDED_OPENINGS);
export const removeCurrentOpening = createAction(REMOVE_CURRENT_OPENING);

// initialState
const initialState = {
  jobGroups: [],
  tags: [],
  openings: [],
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
        console.log("직무 그룹 리스트를 가져올 수 없습니다.", err)
      );
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
        console.log("해당 직무의 공고 목록를 가져올 수 없습니다.", err)
      );
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

// reducer
export default handleActions(
  {
    [TOGGLE_LIKE]: (state, action) => produce(state, (draft) => {}),
    [GET_TAGS]: (state, action) => produce(state, (draft) => {}),
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
    [GET_TAG_RESULTS]: (state, action) => produce(state, (draft) => {}),
    [GET_CARRER_RESULTS]: (state, action) => produce(state, (draft) => {}),
    [GET_OPENING_DETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.currentOpening = action.payload.opening;
      }),
    [GET_RECOMMENDED_OPENINGS]: (state, action) =>
      produce(state, (draft) => {}),
    [REMOVE_CURRENT_OPENING]: (state, action) =>
      produce(state, (draft) => {
        draft.currentOpening = {};
      }),
  },
  initialState
);
