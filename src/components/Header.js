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
import MiniModal from "./modal/MiniModal";
import LoginModal from "./modal/MiniModal";

const Header = (props) => {
  const isLogin = useSelector((state) => state.user.is_login);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const menuList = [
    {
      name: "탐색",
      path: "/explore",
    },
    { name: "커리어 성장" },
    { name: "직군별 연봉" },
    { name: "이력서" },
    { name: "매치업" },
    { name: "프리랜서" },
  ];

  return (
    <>
      {!isLogin && <LoginModal showModal={showModal} closeModal={closeModal} />}
      {isLogin && <MiniModal showModal={showModal} closeModal={closeModal} />}
      <Container>
        <Content>
          <Left>
            <LogoBtn
              src={Logo}
              alt="원티드"
              onClick={() => history.push("/")}
            />
          </Left>

          <Mid>
            <HomeBtn>홈</HomeBtn>
            {menuList.map((item, idx) => (
              <TextBtn
                key={idx}
                onClick={item.path ? () => history.push(item.path) : null}
              >
                {item.name}
              </TextBtn>
            ))}
          </Mid>
          <Right>
            <IconBtn icon={<HiOutlineSearch />} />
            {isLogin && <IconBtn icon={<VscBell />} />}
            {isLogin && <IconBtn _onClick={openModal} icon={<VscMenu />} />}
            {!isLogin && (
              <ModalBtn onClick={openModal}>회원가입/로그인</ModalBtn>
            )}
          </Right>
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 0;
  left: 9;
  z-index: 99;
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

  & > button:nth-child(2) {
    border-color: ${({ theme }) => theme.colors.mainBlue};
  }
`;

const Right = styled.div`
  display: flex;
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
  cursor: pointer;
`;

const HomeBtn = styled(TextBtn)`
  ${onlyMobile};
`;

const ModalBtn = styled(TextBtn)`
  ${hiddenMobile};
  font-size: 14px;
`;

export default Header;
