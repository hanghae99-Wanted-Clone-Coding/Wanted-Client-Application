import React from "react";
import styled from "styled-components";

const Box = (props) => {
    const {is_flex, is_grid, width, margin, padding, children} = props;
    
    const styles = {
        is_flex: is_flex,
        is_grid: is_grid,
        width: width,
        margin: margin,
        padding: padding,

    }
    
    return(
        <>
            <Div>{children}</Div>
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

}

const Div = styled.div`

    ${(props) => (props.width ? `padding: ${props.width};` : "")}
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
    text-align: left;
        
    
`;

export default Box;