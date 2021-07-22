import React from "react";
import styled from "styled-components";
import Image from "../elements/Image";
import { flex, flexColumn } from "../mixin";

const MyListCard = (props) => {
  const { title, company, location, src, imgUrl } = props;
  return (
    <Card>
      <Image shape="square" src={imgUrl} size="70px" />
      <CardText>
        <Title>{title}</Title>
        <CompanyBox>
          <Company>{company}</Company>
          <Location>{location}</Location>
        </CompanyBox>
      </CardText>
    </Card>
  );
};

MyListCard.defaultProps = {
  title: "",
  company: "",
};

const Card = styled.article`
  ${flex};
  height: 70px;
  margin-top: 20px;
`;

const CardText = styled.div`
  ${flexColumn};
  align-items: flex-start;
  height: 100%;
  margin-left: 15px;
`;

const Title = styled.h3`
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 16px;
`;

const CompanyBox = styled.div`
  ${flex};
  flex-wrap: wrap;
`;

const Company = styled.h4`
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 700;
`;

const Location = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lightGray};

  &::before {
    content: "|";
    margin: 0 8px;
  }
`;

export default MyListCard;
