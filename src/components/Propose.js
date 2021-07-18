import React from "react";
import styled from "styled-components";
import MyPageSection from "../elements/MyPageSection";
import { flex, flexColumn } from "../mixin";

const Propose = (props) => {
  return (
    <MyPageSection title="제안받기 현황">
      <Content>
        <Result>
          <ResultNum>0</ResultNum>
          <ResultDesc>원해요</ResultDesc>
        </Result>
        <Result>
          <ResultNum>0</ResultNum>
          <ResultDesc>열람</ResultDesc>
        </Result>
        <Result>
          <ResultNum>0</ResultNum>
          <ResultDesc>받은 제안</ResultDesc>
        </Result>
      </Content>
    </MyPageSection>
  );
};

const Content = styled.article`
  ${flex};
  justify-content: space-around;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.bgGray};
`;

const Result = styled.div`
  ${flexColumn};
`;

const ResultNum = styled.strong`
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 700;
`;

const ResultDesc = styled.span`
  font-size: 14px;
`;
export default Propose;
