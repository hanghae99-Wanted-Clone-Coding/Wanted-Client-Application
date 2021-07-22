import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import RoundImg from "../elements/RoundImg";
import { flex, container, hiddenMobile } from "../mixin";

const MyWanted = (props) => {
  const userName = useSelector((state) => state.user.user.name);
  const userEmail = useSelector((state) => state.user.user.email);


  return (
    <Container>
      <Profile>
        <RoundImg
          mbSize="60px"
          tbSize="77px"
          src="https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"
          alt="내 프로필 사진"
        />
        <Name>{userName}</Name>
        <UserInfo>{userEmail}</UserInfo>
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
