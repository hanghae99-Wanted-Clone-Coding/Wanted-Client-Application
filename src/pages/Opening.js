import React from "react";
import styled from "styled-components";
import OpeningHeader from "../components/OpeningHeader";
import OpeningBody from "../components/OpeningBody";

import Image from "../elements/Image";
import { container } from "../mixin";

const Opening = (props) => {
  return (
    <>
      <div>
        <Image
          src={
            "https://static.wanted.co.kr/images/company/6905/edqjuddenbz0tnqt__1080_790.jpg"
          }
          alt="공고사진"
        />
      </div>
      <Container>
        <OpeningHeader />
        <OpeningBody />
      </Container>
    </>
  );
};

const Container = styled.div`
  ${container};
  position: relative;
`;

export default Opening;
