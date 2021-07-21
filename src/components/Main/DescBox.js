import React from "react";
import styled from "styled-components";
import Image from "../../elements/Image";
import { flexColumn } from "../../mixin";

const DescBox = (props) => {
  const { src, title, description } = props.obj;

  return (
    <Container>
      <Image src={src} size="100%" />
      <DescContainer>
        {title.split("/").map((word) => (
          <DescTitle>{word}</DescTitle>
        ))}
        {/* <DescTitle>{title.split("/").join("\n")}</DescTitle> */}
        <DescText>{description}</DescText>
      </DescContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 520px;
  padding: 80px;
`;

const DescContainer = styled.div`
  ${flexColumn};
`;

const DescTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
`;

const DescText = styled.p`
  text-align: center;
`;

export default DescBox;
