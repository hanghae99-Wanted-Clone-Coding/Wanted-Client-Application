import { apis } from "../../shared/api";
import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { setCookie, getCookie, deleteCookie } from "../../shared/cookie";

// action type
const SET_USER = "user/SET_USER";
const LOGOUT = "user/LOGOUT";
const ADD_LIKE = "user/ADD_LIKE";
const REMOVE_LIKE = "user/REMOVE_LIKE";

// action creator
const setUser = createAction(SET_USER, (user) => ({ user }));
const logout = createAction(LOGOUT);
export const userAddLike = createAction(ADD_LIKE, (openingId) => ({
  openingId,
}));
export const userRemoveLike = createAction(REMOVE_LIKE, (openingId) => ({
  openingId,
}));

// initialState
const initialState = {
  user: {
    name: "jihyun",
    email: "hwiyu25@naver.com",
    likeList: [1, 4, 12, 13, 18, 24, 30, 36, 40, 41],
  },
  is_login: false,
};

//middleware actions
const setUserDB =
  () =>
  (dispatch, getState, { history }) => {
    apis
      .setUser()
      .then((res) => dispatch(setUser(res.data)))
      .catch((err) => console.log("유저 정보를 받아오지 못했습니다.", err));
  };

const loginDB =
  (infoObj) =>
  (dispatch, getState, { history }) => {
    apis
      .login(infoObj)
      .then((res) => {
        const accessToken = "Bearer " + res.data.accessToken;
        setCookie("isLogin", `${accessToken}`);
      })
      .then(() => dispatch(setUserDB()))
      .catch((err) => {
        alert("로그인에 실패했습니다.");
        console.log(err);
      });
  };

const logoutDB = () => {
  return function (dispatch, getState, { history }) {
    dispatch(logout());
    window.alert("로그아웃 되었습니다");
    history.replace("/");
  };
};

const signUpDB =
  (infoObj) =>
  (dispatch, getState, { history }) => {
    apis.signup(infoObj).catch((err) => {
      alert("회원가입에 실패했습니다.");
      console.log(err);
    });
  };

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOGOUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = {};
        draft.is_login = false;
      }),
    [ADD_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.user.likeList.push(action.payload.openingId);
      }),
    [REMOVE_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.user.likeList = draft.user.likeList.filter(
          (item) => item !== action.payload.openingId
        );
      }),
  },
  initialState
);

const actionCreators = {
  logout,
  loginDB,
  logoutDB,
  signUpDB,
};

export { actionCreators };
