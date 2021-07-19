import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { flex } from "../mixin";
import { FiChevronRight } from "react-icons/fi";

const MyPageSection = (props) => {
  const { title, link, marginBt, children } = props;
  return (
    <Section marginBt={marginBt}>
      <TitleBox>
        <Title>{title}</Title>
        <TitleLink to="/mypage">
          {link}
          {link && <FiChevronRight />}
        </TitleLink>
      </TitleBox>
      {children}
    </Section>
  );
};

MyPageSection.defaultProps = {
  title: "",
  link: null,
  marginBt: false,
};

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.device.tablet} {
    padding: 20px 30px 30px 30px;
    margin-bottom: ${(props) => (props.marginBt ? props.marginBt : "20px")};
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const TitleBox = styled.div`
  ${flex};
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;

  ${({ theme }) => theme.device.tablet} {
    font-size: 18px;
  }
`;

const TitleLink = styled(Link)`
  ${flex};
  color: ${({ theme }) => theme.colors.mainBlue};
  font-size: 14px;
`;

export default MyPageSection;
