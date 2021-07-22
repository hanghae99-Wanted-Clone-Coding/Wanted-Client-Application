import axios from "axios";
import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { apis } from "../../shared/api";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

// action type
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";
const ADD_LIKE = "user/ADD_LIKE";
const REMOVE_LIKE = "user/REMOVE_LIKE";

// action creator
const login = createAction(LOGIN);
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
const loginDB = (code) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "GET",
      // url: `/api/login?code=${code}`,
      url: `http://52.79.144.138:8080/api/user/${code}`,
      // 보내기로 약속한 url
    })
      .then((res) => {
        console.log(res);

        const ACCESS_TOKEN = res.data.accessToken;

        setCookie("is_login", `${ACCESS_TOKEN}`);
        history.replace("/");
        window.alert("성공");
      })
      .catch((err) => {
        console.log(err);
        window.alert("로그인에 실패하였습니다");
        history.replace("/");
      });
  };
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
    apis.signup(infoObj);
  };

// reducer
export default handleActions(
  {
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
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
  login,
  logout,
  loginDB,
  logoutDB,
  signUpDB,
};

export { actionCreators };
