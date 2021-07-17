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
                <Text size="18px" bold margin="0 0 10px 0">{props.title}</Text>
                <Text size="14px" bold margin="0 0 13px 0">{props.companyName}</Text>
                <Text size="14px" margin="0 0 13px 0">서울 · 한국</Text>
                <Text size="13px">채용보상금 1,000,000원</Text>
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
    border: 1px solid black;
    
`;

Card.defaultProps = {
  title: "프론트엔드 엔지니어(React)",
  companyName: "굿닥(goodoc)",

}

export default Card;
