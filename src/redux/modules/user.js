import axios from "axios";
import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

// action type
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";

// action creator
const login = createAction(LOGIN);
const logout = createAction(LOGOUT);

// initialState
const initialState = {
  user: {},
  is_login: false,
};

//middleware actions
const loginDB = (code) => {
  return function (dispatch, getState, {history}) {
    axios({
      method: "POST",
      url: `.../api/login?code=${code}`, 
      // 보내기로 약속한 url
    })
    .then((res) => {
      const accessToken = res.data.token;

      setCookie("is_login", `${accessToken}`);
      history.replace("/");
    })
    .catch((err) => {
      console.log(err);
      window.alert("로그인에 실패하였습니다")
    })
  }
}

const logoutDB = () => {
  return function (dispatch, getState, {history}) {
    dispatch(logout());
    window.alert("로그아웃 되었습니다");
    history.replace("/");
  }
}

// reducer
export default handleActions(
  {
    [LOGIN]: (state, action) => produce(state, (draft) => {
      setCookie("is_login", "success");
      draft.user = action.payload.user;
      draft.is_login = true;
    }),
    [LOGOUT]: (state, action) => produce(state, (draft) => {
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
  logoutDB

};

export {actionCreators};
