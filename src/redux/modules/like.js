import axios from "axios";
import produce from "immer";
import { createAction, handleActions } from "redux-actions";

// 좋아요 토글하기 액션
const TOGGLE_LIKE = "TOGGLE_LIKE";

// 좋아요 토글 액션 생성자
const toggleLike = createAction(TOGGLE_LIKE, (openings_id, is_like = null) => ({
    openings_id,
    is_like,
}));

const initialState = {
    
}

