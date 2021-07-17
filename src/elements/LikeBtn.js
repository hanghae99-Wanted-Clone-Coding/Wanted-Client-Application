import React from "react";
import styled from "styled-components";

const LikeBtn = (props) => {
    const {children} = props;
    return(
        <Btn>{children}</Btn>
    );
}

const Btn = styled.button`
    position: absolute;
    right: 5px;
    top: 5px;
    width: 52px;
    height: 25px;
    font-size: 12px;
    color: white;
    background-color: ${({theme}) => theme.colors.gray};
    opacity: 0.7;
    border-radius: 3px;

    ${({theme}) => theme.device.tablet} {
        right: 10px;
        top: 10px;
        width: 60px;
        height: 30px;
    }
`;

export default LikeBtn;

