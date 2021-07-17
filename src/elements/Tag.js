import React from "react";
import styled, { css } from "styled-components";

const Tag = (props) => {
  const { name } = props;
  return (
    <TagBtn>
      <TagName>{name}</TagName>
    </TagBtn>
  );
};

Tag.defaultProps = {
  text: "",
};

const TagBtn = styled.button`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      flex-shrink: 0;
      padding: 9px 14px;
      margin-bottom: 10px;
      margin-right: 6px;
      border-radius: 25px;
      background-color: ${colors.bgGray};
    `;
  }}
`;

const TagName = styled.span`
  font-size: 10px;

  ${({ theme }) => theme.device.tablet} {
    font-size: 11px;
  }

  &::before {
    content: "#";
  }
`;

export default Tag;
