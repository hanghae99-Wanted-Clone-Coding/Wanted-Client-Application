import React from "react";
import Card from "../components/Card";
import styled from "styled-components";

const Explore = () => {
  return (
    <>
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </>
    );
};

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  

  @media screen and (max-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
    
  }

  `;

export default Explore;
