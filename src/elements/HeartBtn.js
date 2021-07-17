import React from "react";
import styled from "styled-components";
import { TiHeart } from "react-icons/ti";
import { flex } from "../mixin";

const HeartBtn = (props) => {
  const { heartNum } = props;
  return (
    <Btn>
      <Heart />
      <HeartNum>{heartNum}</HeartNum>
    </Btn>
  );
};

HeartBtn.defaultProps = {
  heartNum: 0,
};

const Btn = styled.button`
  ${flex};
  gap: 5px;
  padding: 3px 15px;
  border: 1px solid ${({ theme }) => theme.colors.heartGray};
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.heartGray};
`;

const Heart = styled(TiHeart)`
  font-size: 22px;
`;

const HeartNum = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: initial;
`;

export default HeartBtn;
