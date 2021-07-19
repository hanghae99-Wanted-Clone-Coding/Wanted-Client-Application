import React from "react";
import styled from "styled-components";

const Text = (props) => {
    const {bold, color, size, children, margin, padding} = props;

    const styles = {
        bold: bold,
        color: color,
        size: size,
        margin: margin,
        padding: padding,
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
};

const TextBox = styled.span`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold? "600" : "400")};
    ${(props) => (props.margin? `margin: ${props.margin};` : '')};
    ${(props) => (props.padding? `padding: ${props.padding};` : '')};        
    `;


export default Text;