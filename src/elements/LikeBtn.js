import React from "react";
import styled from "styled-components";
import { TiHeart } from "react-icons/ti";
import { flex } from "../mixin";

const LikeBtn = (props) => {
    const {children} = props;
    return(

        <Btn>
            <Like />
            {children}
        </Btn>
    );
}

const Btn = styled.button`
    ${flex};
    justify-content: center;
    position: absolute;
    right: 5px;
    top: 5px;
    width: 52px;
    height: 25px;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    // background-color: ${({theme}) => theme.colors.gray};
    background: rgba(0,0,0,.3);
    border-radius: 3px;

    ${({theme}) => theme.device.tablet} {
        right: 10px;
        top: 10px;
        width: 60px;
        height: 30px;
    }   
`;

const Like = styled(TiHeart)`
    font-size: 22px;
    color: ${({ theme }) => theme.colors.heartGray};
`;

export default LikeBtn;

