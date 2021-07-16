import React from "react";
import styled from "styled-components";
import Image from "../elements/Image";

const Card = (props) => {
    
    return(
        <>
          <CardBox>
                <Image />
              
              <div>
                <div>채용공고제목</div>
                <div>회사</div>
                <div>한국</div>
                <div>채용보상금</div>
              </div>
          </CardBox>
        </>
        
    );
}

//반응형 하고 싶었으나 뭔가 이상해짐
const CardBox = styled.div`
    position: relative;
    width: 100%;
    max-height: 440px;
    padding-top: clac(300 / 1000 * 100%);
    // calc (이미지 높이 ÷ 이미지 가로 × 100 %)
    border: 1px solid black;
    
`;

export default Card;
