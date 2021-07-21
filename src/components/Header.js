import React, { useState } from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";
import { container } from "../mixin";
import { VscBell, VscMenu } from "react-icons/vsc";
import { HiOutlineSearch } from "react-icons/hi";
import { flex, hiddenMobile, onlyMobile } from "../mixin";
import Logo from "../assets/wanted-logo.png";
import IconBtn from "../elements/IconBtn";
import { useSelector } from "react-redux";

const Header = (props) => {
  // history 객체 받아서 링크 연결해주기

  const isLogin = useSelector((state) => state.user.is_login);
  console.log(isLogin);

  const menuList = [
    {
      name: "탐색",
      path: "/",
    },
    { name: "커리어 성장" },
    { name: "직군별 연봉" },
    { name: "이력서" },
    { name: "매치업" },
    { name: "프리랜서" },
  ];

  return (
    <Container>
      <Content>
        <Left>
          <LogoBtn src={Logo} alt="원티드" onClick={() => history.push("/")} />
        </Left>

        <Mid>
          <HomeBtn>홈</HomeBtn>
          {menuList.map((item, idx) => (
            <TextBtn key={idx}>{item.name}</TextBtn>
          ))}
        </Mid>
        <Right>
          <IconBtn icon={<HiOutlineSearch />} />
          {isLogin && <IconBtn icon={<VscBell />} />}
          {isLogin && <IconBtn icon={<VscMenu />} />}
          {!isLogin && <ModalBtn>회원가입/로그인</ModalBtn>}
        </Right>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Content = styled.div`
  ${container};
  ${flex};
  height: 60px;
  gap: 30px;
  box-sizing: border-box;
  justify-content: space-between;
`;

const Left = styled.h1`
  ${hiddenMobile};
`;

const Mid = styled.nav`
${flex};
  height: 100%;
  min-width: 100px;
  white-space: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none; } 
  &::-webkit-scrollbar { display: none; }

  & > button:nth-child(3) {
    border-color: ${({ theme }) => theme.colors.mainBlue};
  }
`;

const Right = styled.div`
  flex-shrink: 0;
`;

const TextBtn = styled.button`
  height: 100%;
  padding: 0 13px;
  font-size: 13px;
  font-weight: 600;
  border-bottom: 2px solid transparent;
  transition: border-color 200ms ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.colors.border};
  }

  ${({ theme }) => theme.device.tablet} {
    font-size: 14px;
  }
`;

const LogoBtn = styled.img`
  width: 75px;
  margin-right: 5px;
`;

const HomeBtn = styled(TextBtn)`
  ${onlyMobile};
`;

const ModalBtn = styled(TextBtn)`
  ${hiddenMobile};
  font-size: 14px;
`;

export default Header;
