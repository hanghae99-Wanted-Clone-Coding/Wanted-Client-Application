import React from "react";
import {useDispatch} from "react-redux";

const KakaoRedirect = (props) => {
    const dispatch = useDispatch();

    //Redirect_url 뒤에 파라미터로 넘어오는 인가 코드
    let code = new URL(window.location.href).searchParams.get("code");

    React.useEffect(async () => {
        
    })

    
}

export default KakaoRedirect;