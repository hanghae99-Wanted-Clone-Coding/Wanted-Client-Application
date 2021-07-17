import React from "react";
import styled from "styled-components";
import OpeningHeader from "../components/OpeningHeader";
import OpeningBody from "../components/OpeningBody";

import Image from "../elements/Image";
import { container, flex, onlyDesktop } from "../mixin";
import RewardAside from "../components/RewardAside";

const Opening = (props) => {
  return (
    <Container>
      <LeftBox>
        <ImageContainer>
          <Image
            src={
              "https://static.wanted.co.kr/images/company/6905/edqjuddenbz0tnqt__1080_790.jpg"
            }
            alt="공고사진"
          />
        </ImageContainer>
        <ContentBox>
          <OpeningHeader />
          <OpeningBody />
        </ContentBox>
      </LeftBox>
      <RightBox>
        <RewardAside />
      </RightBox>
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  margin: 0 auto;

  ${({ theme }) => theme.device.desktop} {
    ${flex};
    align-items: flex-start;
    gap: 25px;
    max-width: 1120px;
    padding: 0 40px;
  }
`;

const LeftBox = styled.section`
  width: 100%;

  ${({ theme }) => theme.device.desktop} {
    max-width: 700px;
  }
`;

const RightBox = styled.aside`
  ${onlyDesktop};
  position: sticky;
  top: 20px;
  flex-grow: 1;
  flex-shrink: 0;
  min-width: 300px;
  margin-top: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 3px;
`;

const ImageContainer = styled.div`
  ${({ theme }) => theme.device.tablet} {
    margin: 20px 40px 0 40px;
  }

  ${({ theme }) => theme.device.desktop} {
    margin: 20px 0 0 0;
  }
`;

const ContentBox = styled.div`
  ${container};
  position: relative;

  ${({ theme }) => theme.device.desktop} {
    padding: 0;
  }
`;

export default Opening;
