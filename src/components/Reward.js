import React from "react";
import styled from "styled-components";
import { flex, flexColumn } from "../mixin";

const Reward = (props) => {
  return (
    <RewardBox>
      <div>
        <Title>채용보상금</Title>
        <List>
          <DescBox>
            <DescTitle>추천인</DescTitle>
            <DescText>500,000원</DescText>
          </DescBox>
          <DescBox>
            <DescTitle>지원자</DescTitle>
            <DescText>500,000원</DescText>
          </DescBox>
        </List>
      </div>
    </RewardBox>
  );
};

const RewardBox = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.bgGray};
`;

const Title = styled.h5`
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: 600;
`;

const List = styled.dl`
  ${flex};
`;

const DescBox = styled.div`
  ${flexColumn};
  align-items: flex-start;
  width: 50%;
`;

const DescTitle = styled.dt`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.lightGray};
`;

const DescText = styled.dd`
  font-size: 15px;
  font-weight: 600;
`;

export default Reward;
