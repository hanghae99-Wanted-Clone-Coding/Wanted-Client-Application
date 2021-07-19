import produce from "immer";
import { createAction, handleActions } from "redux-actions";

// action type
const TOGGLE_LIKE = "opening/TOGGLE_LIKE";
const GET_TAGS = "opening/GET_TAGS";
const GET_ALL_OPENINGS = "opening/GET_ALL_OPENINGS";
const GET_JOBGROUP_OPENINGS = "opening/GET_JOBGROUP_OPENINGS";
const GET_TAG_RESULTS = "opening/GET_TAG_RESULTS";
const GET_CARRER_RESULTS = "opening/GET_CAREER_RESULTS";
const GET_OPENING_DETAIL = "opening/GET_OPENING_DETAIL";
const GET_RECOMMENDED_OPENINGS = "opening/GET_RECOMMENDED_OPENINGS";

// action creator
const toggleLike = createAction(TOGGLE_LIKE);
const getTags = createAction(GET_TAGS);
const getAllOpenings = createAction(GET_ALL_OPENINGS);
const getJobgroupOpenings = createAction(GET_JOBGROUP_OPENINGS);
const getTagResults = createAction(GET_TAG_RESULTS);
const getCareerResults = createAction(GET_CARRER_RESULTS);
const getOpeningDetail = createAction(GET_OPENING_DETAIL);
const getRecommendedOpenings = createAction(GET_RECOMMENDED_OPENINGS);

// initialState
const initialState = {
  jobGroups: [],
  tags: [],
  openings: [],
  currentOpening: {},
};

// reducer
export default handleActions(
  {
    [TOGGLE_LIKE]: (state, action) => produce(state, (draft) => {}),
    [GET_TAGS]: (state, action) => produce(state, (draft) => {}),
    [GET_ALL_OPENINGS]: (state, action) => produce(state, (draft) => {}),
    [GET_JOBGROUP_OPENINGS]: (state, action) => produce(state, (draft) => {}),
    [GET_TAG_RESULTS]: (state, action) => produce(state, (draft) => {}),
    [GET_CARRER_RESULTS]: (state, action) => produce(state, (draft) => {}),
    [GET_OPENING_DETAIL]: (state, action) => produce(state, (draft) => {}),
    [GET_RECOMMENDED_OPENINGS]: (state, action) =>
      produce(state, (draft) => {}),
  },
  initialState
);
