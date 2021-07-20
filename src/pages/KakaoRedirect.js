import React from "react";
import {useDispatch} from "react-redux";
import {actionCreators as loginAction} from "../redux/modules/user";

const KakaoRedirect = (props) => {
    const dispatch = useDispatch();

    //Redirect_url 뒤에 파라미터로 넘어오는 인가 코드
    let code = new URL(window.location.href).searchParams.get("code");

    React.useEffect(async () => {
        await dispatch(loginAction.loginDB(code));
    }, []);

    return null;

}

export default KakaoRedirect;