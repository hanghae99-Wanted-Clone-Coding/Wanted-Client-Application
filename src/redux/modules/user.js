import produce from "immer";
import { createAction, handleActions } from "redux-actions";

// action type
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";

// action creator
const login = createAction(LOGIN);
const logout = createAction(LOGOUT);

// initialState
const initialState = {
  user: {},
};

// reducer
export default handleActions(
  {
    [LOGIN]: (state, action) => produce(state, (draft) => {}),
    [LOGOUT]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);
