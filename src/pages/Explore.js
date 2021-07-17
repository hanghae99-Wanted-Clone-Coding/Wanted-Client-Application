import React from "react";
import {container} from "../mixin/container";
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
  ${container};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  ${({theme}) => theme.device.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }

  `;

export default Explore;
