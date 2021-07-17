import React from "react";
import { container } from "../mixin/container";
import Card from "../components/Card";
import styled from "styled-components";
import Slider from "../components/Slider";

const Explore = () => {

  const openingList = [
    {
      title: "프론트엔드 엔지니어(React)",
      companyName: "굿닥(goodoc)",
      imgUrl:"https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
      likeCount: 12,
    },
    {
      title: "백엔드 엔지니어(React)",
      companyName: "굿닥(goodoc)",
      imgUrl:"https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
      likeCount: 12,
    },
    {
      title: "프론트엔드 엔지니어(React)",
      companyName: "굿닥(goodoc)",
      imgUrl:"https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
      likeCount: 12,
    },
    {
      title: "프론트엔드 엔지니어(React)",
      companyName: "굿닥(goodoc)",
      imgUrl:"https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
      likeCount: 12,
    },
    {
      title: "프론트엔드 엔지니어(React)",
      companyName: "굿닥(goodoc)",
      imgUrl:"https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
      likeCount: 12,
    },
    {
      title: "프론트엔드 엔지니어(React)",
      companyName: "굿닥(goodoc)",
      imgUrl:"https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
      likeCount: 12,
    },
    {
      title: "프론트엔드 엔지니어(React)",
      companyName: "굿닥(goodoc)",
      imgUrl:"https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
      likeCount: 12,
    },
    {
      title: "프론트엔드 엔지니어(React)",
      companyName: "굿닥(goodoc)",
      imgUrl:"https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
      likeCount: 12,
    },
    {
      title: "프론트엔드 엔지니어(React)",
      companyName: "굿닥(goodoc)",
      imgUrl:"https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
      likeCount: 12,
    },
  ]
  return (
    <>
      <Slider></Slider>
      <Container>
        <CardContainer>
          {openingList.map((l, idx) => {
            return(
              <Card key={idx} {...l}/>
            )
          })

          }
        </CardContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  ${container};
`;



const CardContainer = styled.div`
  ${container};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  ${({ theme }) => theme.device.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default Explore;
