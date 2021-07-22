import React from "react";
import styled from "styled-components";
import DescBox from "../components/Main/DescBox";
import Image from "../elements/Image";
import { flex, flexColumn, hiddenMobile } from "../mixin";

const Main = (props) => {
  const descAry = [
    {
      src: "https://static.wanted.co.kr/images/newintro/001.webp",
      title: `더 나은 커리어를 위한 / 새로운 기회`,
      description:
        "나에게 딱 맞는 회사를 찾거나 나에게 딱 맞는 회사가 커리어를 제안합니다.",
    },
  ];

  return (
    <Container>
      <Intro>
        <IntroContent>
          <InfoTitle>
            직장인의 커리어 여정을
            <br /> 행복하게, 원티드
          </InfoTitle>
          <InfoText>지금 원티드와 커리와 여정을 시작하세요.</InfoText>
          <FillBtn>지금 시작하기</FillBtn>
        </IntroContent>
      </Intro>

      <Desc>
        {descAry.map((desc, idx) => (
          <DescBox key={idx} obj={desc} />
        ))}
      </Desc>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Intro = styled.section`
  ${flexColumn};
  width: 100%;
  height: 500px;
  padding-top: 50px;
  background: 50% / cover no-repeat #eee
    url(https://static.wanted.co.kr/images/newintro/mobile.webp);
  -webkit-box-pack: center;

  ${({ theme }) => theme.device.desktop} {
    align-items: flex-start;
    height: 550px;
  }
`;

const IntroContent = styled.div`
  ${flexColumn};

  ${({ theme }) => theme.device.desktop} {
    align-items: flex-start;
    width: 940px;
    margin: 0 auto;
  }
`;

const InfoTitle = styled.h1`
  margin-bottom: 12px;
  font-size: 30px;
  font-weight: 700;
  text-align: center;

  ${({ theme }) => theme.device.desktop} {
    width: 940px;
    margin-bottom: 20px;
    font-size: 48px;
    text-align: left;
  }
`;

const InfoText = styled.p`
  font-size: 16px;

  ${({ theme }) => theme.device.desktop} {
    font-size: 18px;
    text-align: left;
  }
`;

const Desc = styled.section`
  ${flexColumn};
`;

const FillBtn = styled.button`
  ${flex};
  justify-content: center;
  position: fixed;
  width: calc(100% - 40px);
  height: 50px;
  bottom: 20px;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.mainBlue};
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  font-size: 16px;

  ${({ theme }) => theme.device.desktop} {
    display: initial;
    justify-content: center;
    width: 230px;
    height: 64px;
    border: 1px solid ${({ theme }) => theme.colors.mainBlue};
    font-size: 20px;
  }
`;

export default Main;
