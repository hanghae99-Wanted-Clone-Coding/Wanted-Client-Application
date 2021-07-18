import React from "react";
import styled from "styled-components";

const RoundImg = ({ ...rest }) => {
  return <Image {...rest} />;
};

const Image = styled.div`
  --mbSize: ${(props) => (props.mbSize ? props.mbSize : 0)};
  --tbSize: ${(props) => (props.tbSize ? props.tbSize : props.mbSize)};
  --dtSize: ${(props) => (props.dtSize ? props.dtSize : props.tbSize)};

  width: var(--mbSize);
  height: var(--mbSize);
  border-radius: var(--mbSize);

  background-image: url("${(props) => props.src}");
  background-size: cover;

  ${({ theme }) => theme.device.tablet} {
    width: var(--tbSize);
    height: var(--tbSize);
    border-radius: var(--tbSize);
  }

  ${({ theme }) => theme.device.desktop} {
    width: var(--dtSize);
    height: var(--dtSize);
    border-radius: var(--dtSize);
  }
`;

export default RoundImg;
