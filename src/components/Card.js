import React from "react";
import styled from "styled-components";
import Image from "../elements/Image";
import Text from "../elements/Text";

const Card = (props) => {
    
    return(
        <>
          <CardBox>
              <Image />
              <Text padding="15px">
                <Title>{props.title}</Title>
                <Company>{props.companyName}</Company>
                <Location>서울 · 한국</Location>
                <Compensation>채용보상금 1,000,000원</Compensation>
              </Text>
          </CardBox>
        </>
        
    );
}


const CardBox = styled.div`
    position: relative;
    width: 100%;
    max-height: 440px;
    padding-top: clac(300 / 1000 * 100%);
    // calc (이미지 높이 ÷ 이미지 가로 × 100 %)
    // border: 1px solid black;
    
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
  ${({theme}) => theme.device.tablet} {
    font-size: 18px;
  }
`;

const Company = styled.div`
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 10px;
  ${({theme}) => theme.device.tablet} {
    font-size: 14px;
  }
`;

const Location = styled.div`
  font-size: 11px;
  ${({theme}) => theme.device.tablet} {
    font-size: 14px;
  };
  color:  ${({theme}) => theme.colors.lightGray};
  margin-bottom: 10px;
`;

const Compensation = styled.div`
  font-size: 13px;
  color:  ${({theme}) => theme.colors.gray};
  margin-bottom: 10px;
`;

  

Card.defaultProps = {
  title: "프론트엔드 엔지니어(React)",
  companyName: "굿닥(goodoc)",

}

export default Card;
