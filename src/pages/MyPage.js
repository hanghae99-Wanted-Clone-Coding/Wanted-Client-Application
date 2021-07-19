import React from "react";
import styled from "styled-components";
import ApplyResult from "../components/ApplyResult";
import BookMark from "../components/BookMark";
import MyLike from "../components/MyLike";
import MyWanted from "../components/MyWanted";
import Propose from "../components/Propose";
import OnlyMobile from "../elements/OnlyMobile";
import { container, flex, flexColumn, onlyMobile } from "../mixin";

const MyPage = (props) => {
  const { history } = props;
  const handleClick = () => history.push("/mypage");
  return (
    <Page>
      <TitleBox>
        <PageTitle>My 원티드</PageTitle>
        <EditLink onClick={handleClick}>기본정보 수정</EditLink>
      </TitleBox>
      <Container>
        <Left>
          <MyWanted />
        </Left>
        <Right>
          <OnlyMobile>
            <Propose />
          </OnlyMobile>
          <ApplyResult />
          <BookMark />
          <MyLike />
        </Right>
      </Container>
    </Page>
  );
};

const Page = styled.main`
  ${flexColumn};
  min-height: calc(100vh - 70px);
  background-color: ${({ theme }) => theme.colors.bgGray};

  ${({ theme }) => theme.device.tablet} {
    align-items: flex-start;
  }
`;

const Container = styled.div`
  ${flexColumn};
  width: 100%;

  ${({ theme }) => theme.device.tablet} {
    max-width: 1120px;
    flex-direction: row;
    align-items: flex-start;
    padding: 0 40px;
    margin: 0 auto;
  }
`;

const Left = styled.section`
  flex-shrink: 0;
  width: 100%;

  ${({ theme }) => theme.device.tablet} {
    margin-right: 20px;
    width: 250px;
  }
`;

const Right = styled.section`
  flex-grow: 1;
  width: 100%;
`;

const TitleBox = styled.div`
  ${container};
  ${flex};
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.device.tablet} {
    background-color: transparent;
    padding-top: 50px;
    padding-bottom: 20px;
  }
`;

const PageTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;

  ${({ theme }) => theme.device.tablet} {
    font-size: 20px;
  } ;
`;

const EditLink = styled.span`
  ${onlyMobile};
  color: ${({ theme }) => theme.colors.mainBlue};
`;

export default MyPage;
