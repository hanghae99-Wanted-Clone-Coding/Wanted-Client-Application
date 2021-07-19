import React from "react";
import styled from "styled-components";

const Text = (props) => {
    const {line_height, bold, color, size, children, margin, padding} = props;

    const styles = {
        bold: bold,
        color: color,
        size: size,
        margin: margin,
        padding: padding,
        line_height: line_height,
    }
    return (
        <TextBox {...styles}>{children}</TextBox>
    );
}

Text.defaultProps = {
    bold: false,
    color: "#333",
    size: "14px",
    margin: false,
    padding: false,
    line_height: false,
};

const TextBox = styled.span`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold? "600" : "400")};
    ${(props) => (props.line_height? `line-height: ${props.line_height};` : '')};
    ${(props) => (props.margin? `margin: ${props.margin};` : '')};
    ${(props) => (props.padding? `padding: ${props.padding};` : '')};        

`;
    


export default Text;