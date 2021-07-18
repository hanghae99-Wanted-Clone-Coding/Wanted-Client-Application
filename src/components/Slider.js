import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { container } from "../mixin/container";
import Slide from "../elements/Slide";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// import img1 from "./../img/1.jpg"; //자신이 원하는 이미지를 import 하세요.
// import img2 from "./../img/2.jpg";
// import img3 from "./../img/3.jpg";


const Container = styled.div`
  height: 141px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  `;
 
const Box = styled.div`
    display: flex;
    position: relative;
    width: 1060px;
    margin: 0 auto;
    border: 1px solid blue;
    
`;

const CenterBox = styled.div`
    max-width: 1060px;
    margin: 0 auto;
    overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
    border: 1px solid black;
`;

const Prev = styled(BsChevronLeft)`
  font-size: 20px;
`;

const Next = styled(BsChevronRight)`
  font-size: 20px;
`;

const PrevButton = styled.button`
  position: absolute;
  left: -40px;
  width: 135px;
  height: 60px;
  border: 1px solid coral;
  // background-color: white;
  text-align: left;
  z-index : 1;
`;

const NextButton = styled.button`
  position: absolute;
  right: -40px;
  width: 135px;
  height: 60px;
  border: 1px solid coral;
  // background-color: white;
  text-align: right;
`;

const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  width: 135px;
  height: 60px;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
const SliderContainer = styled.div`

  width: 100%;
  display: flex; //이미지들을 가로로 나열합니다.
  
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
      {currentSlide > 0 && <PrevButton onClick={prevSlide}><Prev /></PrevButton>}
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
      {currentSlide < 2 && <NextButton onClick={nextSlide}><Next/></NextButton>}
      </Box>
      
    </Container>
  );
}