import React from "react";
import styled from "styled-components";
import Tags from "./Tags";
import Reward from "../components/Reward";
import { flexColumn } from "../mixin";

const OpeningHeader = (props) => {
  // 테스트 태그
  const tags = [
    { tagName: "연봉업계평균이상" },
    { tagName: "인원급성장" },
    { tagName: "50명이하" },
    { tagName: "설립3년이하" },
    { tagName: "상여금" },
    { tagName: "육아휴직" },
    { tagName: "물류, 운송" },
    { tagName: "자율복장" },
    { tagName: "석식제공" },
  ];

  return (
    <Box>
      <Title>Data Scientist (데이터 사이언티스트)</Title>
      <CompanyInfo>
        <Company>보이스루</Company>
        <Location>서울 · 한국</Location>
      </CompanyInfo>
      <Tags tags={tags} />
      <Reward />
    </Box>
  );
};

const Box = styled.div`
  padding: 20px 0;

  ${({ theme }) => theme.device.tablet} {
    padding: 20px;
  }

  ${({ theme }) => theme.device.desktop} {
    padding: 20px 0;
  }
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;

  ${({ theme }) => theme.device.tablet} {
    font-size: 22px;
  }
`;

const CompanyInfo = styled.div`
  ${flexColumn};
  align-items: flex-start;

  ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
  }
`;

const Company = styled.h6`
  font-size: 11px;
  font-weight: 600;

  ${({ theme }) => theme.device.tablet} {
    font-size: 14px;
  }
`;

const Location = styled.p`
  font-size: 11px;

  ${({ theme }) => theme.device.tablet} {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.lightGray};

    &::before {
      content: "|";
      margin: 0 5px;
    }
  }
`;

export default OpeningHeader;
