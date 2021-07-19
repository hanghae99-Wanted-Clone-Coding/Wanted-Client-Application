import React from "react";
import styled from "styled-components";
import { onlyMobile } from "../mixin";

const OnlyMobile = ({ children }) => {
  return <Box>{children}</Box>;
};

const Box = styled.div`
  ${onlyMobile};
`;

export default OnlyMobile;
