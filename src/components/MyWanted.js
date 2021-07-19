import React from "react";
import styled from "styled-components";
import RoundImg from "../elements/RoundImg";
import { flex, container, hiddenMobile } from "../mixin";

const MyWanted = (props) => {
  return (
    <Container>
      <Profile>
        <RoundImg
          mbSize="60px"
          tbSize="77px"
          src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="내 프로필 사진"
        />
        <Name>안지현</Name>
        <UserInfo>hwiyu25@gmail.com</UserInfo>
        <UserInfo>010-1234-1234</UserInfo>
      </Profile>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.device.tablet} {
    width: 250px;
    height: 320px;
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const Profile = styled.div`
  ${flex};
  gap: 10px;

  ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
`;

const Name = styled.strong`
  font-size: 18px;
  font-weight: 600;

  ${({ theme }) => theme.device.tablet} {
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

const UserInfo = styled.p`
  ${hiddenMobile};
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 14px;
`;

export default MyWanted;
