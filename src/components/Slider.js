import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import Slide from "../elements/Slide";
import { flex, hiddenMobile, container } from "../mixin";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// import img1 from "./../img/1.jpg"; //자신이 원하는 이미지를 import 하세요.
// import img2 from "./../img/2.jpg";
// import img3 from "./../img/3.jpg";


const Container = styled.div`
  height: 141px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  
  `;
 
// const Box = styled.div`
//     ${flex};
//     position: relative;
//     width: 1045px;
//     margin: 0 auto;
// `;

// const CenterBox = styled.div`
//     margin: 0 auto;
//     padding: 0;
    
//     overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
// `;

const Box = styled.div`
  ${flex};
  margin: 0 auto;
  width: 68vw;
  border: 2px solid orange;
  justify-content: space-between;
  
`;

const CenterBox = styled.div`
  ${container};
  ${flex};
  
  overflow: hidden;
  
  border: 2px solid red;
  
  
`;


const Prev = styled(BsChevronLeft)`
  font-size: 20px;
`;

const Next = styled(BsChevronRight)`
  font-size: 20px;
`;

const PrevBox = styled.div`
  ${flex};
  box-shadow: 5px 0px 5px white;
  width: 40px;
  height: 65px;
  padding: 0px 20px 0px 0px;
`;

const NextBox = styled.div`
  ${flex};
  box-shadow: -10px 0px 10px white;
  width: 40px;
  height: 65px;
  margin-left: auto;
  padding: 0px 0px 0px 20px;
  
`;

const PrevButton = styled.button`
  // position: absolute;
  // left: -40px;
  width: 135px;
  height: 65px;
  text-align: left;
  z-index : 2;
 
  border: 2px solid pink;
  ${hiddenMobile};
`;

const NextButton = styled.button`
  // position: absolute;
  // right: 300px;
  width: 135px;
  height: 65px;
  z-index : 2;
 
  border: 2px solid pink;
  ${hiddenMobile};
`;

const SliderContainer = styled.div`
  display: flex; //이미지들을 가로로 나열합니다.
  width: 100%;
  border: 1px solid blue;
  @media screen and (max-width: 767px) {
    overflow-x : auto;
  }
`;

const TOTAL_SLIDES = 2;

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
    const nextSlide = () => {
    // if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
    //   setCurrentSlide(0);
    // } 
    if(currentSlide < TOTAL_SLIDES) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    // if (currentSlide === 0) {
    //   setCurrentSlide(TOTAL_SLIDES);
    // } 
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);
return (
    <Container>
      {currentSlide}
      <Box>
      {currentSlide > 0 && 
        <PrevButton onClick={prevSlide}>
          <PrevBox><Prev /></PrevBox>
        </PrevButton>}
      <CenterBox>
        
        <SliderContainer ref={slideRef}>
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />            
            <Slide />

        </SliderContainer>
          
      </CenterBox>
      {currentSlide < 2 && 
        <NextButton onClick={nextSlide}>
          <NextBox><Next/></NextBox>
        </NextButton>}
      </Box>
      
    </Container>
  );
}