import axios from "axios";
import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

// action type
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";
const SIGNUP = "user/SIGNUP";

// action creator
const login = createAction(LOGIN);
const logout = createAction(LOGOUT);
// const signUp = createAction(SIGNUP);

// initialState
const initialState = {
  user: {},
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

const signUpDB = (infoObj) => {
  return function (dispatch, getState, { history }) {
    window.alert("회원가입 완료");
  };
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
  },
  initialState
);

const actionCreators = {
  login,
  logout,
  loginDB,
  logoutDB,
};

export { actionCreators };
