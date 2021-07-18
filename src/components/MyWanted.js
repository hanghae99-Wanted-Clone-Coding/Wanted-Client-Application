import React from "react";
import styled from "styled-components";
import RoundImg from "../elements/RoundImg";
import { Link } from "react-router-dom";
import { container, flex } from "../mixin";

const MyWanted = (props) => {
  return (
    <Container>
      <TitleBox>
        <Title>MY 원티드</Title>
        <EditLink to="/mypage">기본정보 수정</EditLink>
      </TitleBox>
      <Profile>
        <RoundImg
          mbSize="60px"
          tbSize="77px"
          src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="내 프로필 사진"
        />
        <Name>안지현</Name>
      </Profile>
    </Container>
  );
};

const Container = styled.section`
  ${container}
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const TitleBox = styled.div`
  ${flex};
  justify-content: space-between;
  padding: 20px 0;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;

const EditLink = styled(Link)`
  color: ${({ theme }) => theme.colors.mainBlue};
`;

const Profile = styled.div`
  ${flex};
  gap: 10px;
`;

const Name = styled.strong`
  font-size: 18px;
  font-weight: 600;
`;

export default MyWanted;
