import React from "react";
import styled from "styled-components";
import {AiOutlineCaretDown} from "react-icons/ai";

const FilterBtn = (props) => {
    const {width, margin, _onClick, children} = props;
    const styles = {
        width: width,
        margin: margin,
    }
    return(
        <>
            <Button {...styles} onClick={_onClick}>{children}</Button>
        </>

    );
}

FilterBtn.defaultProps = {
    width: "120px",
    margin: "0 10px 0 0",
    children: null,
    _onClick: () => {},
}

const Button = styled.button`
    
    max-width: 240px;
    width: ${(props) => props.width};
    height: 40px;
    margin: ${(props) => props.margin};
    border-radius: 4px;
    border: 1px solid #e1e2e3;
    // ${({theme})=>theme.colors.lightGray};
    font-size: 14px;
    font-weight: 400;

    &:hover {
        transition: all 0.3s ease-in-out;
        background-color: #e1e2e3;
        
      }

    // &::after{
    //     content: "\AiOutlineCaretDown";
    // }
    
`;


export default FilterBtn;