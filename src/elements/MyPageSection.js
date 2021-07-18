import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { flex } from "../mixin";
import { FiChevronRight } from "react-icons/fi";

const MyPageSection = (props) => {
  const { title, link, children } = props;
  return (
    <Section>
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
};

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const TitleBox = styled.div`
  ${flex};
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
`;

const TitleLink = styled(Link)`
  ${flex};
  color: ${({ theme }) => theme.colors.mainBlue};

  font-size: 14px;
`;

export default MyPageSection;
