import axios from "axios";
import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { apis } from "../../shared/api";

// action type
const TOGGLE_LIKE = "opening/TOGGLE_LIKE";
const UP_LIKE = "opening/UP_LIKE";
const DOWN_LIKE = "opening/DOWN_LIKE";

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
const toggleLike = createAction(TOGGLE_LIKE, (openingId) => ({
  openingId,
  
}));

const upLike = createAction(UP_LIKE, (openingId) => ({
  openingId,
}));

const downLike = createAction(DOWN_LIKE, (openingId) => ({
  openingId,
}));

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

// const setIsLike = () => {
//   return function (dispatch, getState, {history}) {
//     if(!getState().user.user) {
//       return;
//     }
//     const _opening = getState().opening.openings[openingId];
//     const userOpeningId = getState().user.user.openingLikes.filter(openingLike => _opening.openingId === openingLike.openingId);

//     if(userOpeningId) {
//       isLike : 
//     }
//   }
// }
export const upLikeDB = (openingId) => {
  return function (dispatch, getState, {history}) {
    if(!getState().user.user){
      return;
    }

    const _idx = getState().opening.openings.findIndex((o) => o.openingId === openingId);
    const _opening = getState().opening.openings[_idx];
    const _currentOpening = getState().opening.currentOpening;
    const userOpeningId = getState().user.user.openingLikes.filter(openingLike => _opening.openingId === openingLike.openingId);
    
    if(userOpeningId.length > 0) {
      //좋아요 취소
      
      
        _opening.likeCount = _opening.likeCount - 1 < 0 ? _opening.likeCount : _opening.likeCount - 1;
        _currentOpening.likeCnt = _currentOpening.likeCnt - 1 < 0 ? _opening.likeCount : _opening.likeCount - 1;
        
      }
      

    
  }
}

export const downLikeDB = (openingId) => {
  return function (dispatch, getState, {history}) {
    if(!getState().user.user){
      return;
    }
    const _idx = getState().opening.openings.findIndex((o) => o.openingId === openingId);
    const _opening = getState().opening.openings[_idx];
    const _currentOpening = getState().opening.currentOpening;
    const userOpeningId = getState().user.user.openingLikes.filter(openingLike => _opening.openingId === openingLike.openingId);
    
    if(userOpeningId.length < 0) {
      //좋아요 
        _opening.likeCount = _opening.likeCount +1;
        _currentOpening.likeCnt = _currentOpening.likeCnt +1;
        
      }
      
  }
}


export const toggleLikeDB = (openingId) => { //opening들의 인덱스
  return function (dispatch, getState, {history}) {
    if(!getState().user.user) {
      return;
    }

    const _idx = getState().opening.openings.findIndex((o) => o.openingId === openingId);
    // const _opening = getState().opening.openings[openingId];
    const _opening = getState().opening.openings[_idx];

    // 지현님께 물어보기...openingId 인덱스를 파라미터로 받아와도 openingId가 안되는 지 질문
    //findindex 방법으로 코드 짜놓기
    const _currentOpening = getState().opening.currentOpening;
    const userOpeningId = getState().user.user.openingLikes.filter(openingLike => _opening.openingId === openingLike.openingId);

    if(userOpeningId.length > 0) {
      //좋아요 취소
      axios({
        method: "PUT",
        url: `/api/openings${openingId}/likes`,
        // header: {'Authorization'}
        //도움 요청
      })
      .then((res) => {
        console.log("좋아요 취소 성공");
        _opening.likeCount = _opening.likeCount - 1 < 0 ? _opening.likeCount : _opening.likeCount - 1;
        _currentOpening.likeCnt = _currentOpening.likeCnt - 1 < 0 ? _opening.likeCount : _opening.likeCount - 1;
        dispatch(toggleLike(openingId));
      })
      .catch((err) => {
        console.log(err);
        console.log('좋아요 취소 실패, 에러');
      })
    }else{
      axios({
        method: "POST",
        url: `/api/openings${openingId}/likes`,
      })
      .then((res) => {
        console.log("좋아요 성공");
        _opening.likeCount = _opening.likeCount + 1;
        _currentOpening.likeCnt = _currentOpening.likeCnt + 1;
        dispatch(toggleLike(openingId));
      })
      .catch((err) => {
        console.log(err);
        console.log("좋아요 실패, 에러");
      })
      
    }
    
  }
}



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
    [TOGGLE_LIKE]: (state, action) => 
    produce(state, (draft) => {
      let idx = draft.openings.findIndex((o) => o.openingId === action.payload.openingId);
      draft.openings[idx] = {...draft.opening[idx], ...action.payload.opening};
      
    }),

    []

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
