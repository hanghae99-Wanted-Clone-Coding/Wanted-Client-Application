import React from "react";
import styled from "styled-components";
import MyPageSection from "../elements/MyPageSection";
import { flex, flexColumn } from "../mixin";

const ApplyResult = (props) => {
  return (
    <MyPageSection title="지원 현황">
      <Content>
        <Result>
          <ResultNum>0</ResultNum>
          <ResultDesc>지원 완료</ResultDesc>
        </Result>
        <Result>
          <ResultNum>0</ResultNum>
          <ResultDesc>서류 통과</ResultDesc>
        </Result>
        <Result>
          <ResultNum>0</ResultNum>
          <ResultDesc>최종 합격</ResultDesc>
        </Result>
        <Result>
          <ResultNum>0</ResultNum>
          <ResultDesc>불합격</ResultDesc>
        </Result>
      </Content>
    </MyPageSection>
  );
};

const Content = styled.article`
  ${flex};
  justify-content: space-around;
`;

const Result = styled.div`
  ${flexColumn};
`;

const ResultNum = styled.strong`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const ResultDesc = styled.span`
  font-size: 12px;
`;

export default ApplyResult;
