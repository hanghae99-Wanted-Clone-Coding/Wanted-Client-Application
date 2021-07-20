import React from "react";
import styled from "styled-components";

const Box = (props) => {
    const {bg, color, is_flex, is_grid, width, margin, padding, children, text_align} = props;
    
    const styles = {
        is_flex: is_flex,
        is_grid: is_grid,
        width: width,
        margin: margin,
        padding: padding,
        text_align: text_align,
        bg: bg,
        color: color,
    }
    
    return(
        <>
            <Div {...styles}>{children}</Div>
        </>

    );
}

Box.defaultProps = {
    children: null,
    is_flex: false,
    is_grid: false,
    width: "100%",
    padding: false,
    margin: false,
    text_align: "left",
    bg: false,
    color: "black",
}

const Div = styled.div`
    width: ${(props) => props.width};
    color: ${(props) => props.color};
    ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) =>
    props.is_flex
        ? `display: flex; align-items: center; justify-content: space-between; `
        : ""}
    ${(props) =>
    props.is_grid
        ? `display: grid;`
        : ""}
    
    ${(props) => (props.text_align ? `text-align: ${props.text_align};` : "")}    
    ${(props) => (props.bg ? `background-img: url(${props.bg});` : "")}
`;

export default Box;