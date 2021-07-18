import React from "react";
import styled from "styled-components";
import ApplyResult from "../components/ApplyResult";
import BookMark from "../components/BookMark";
import MyLike from "../components/MyLike";
import MyWanted from "../components/MyWanted";
import Propose from "../components/Propose";
import { flexColumn } from "../mixin";

const MyPage = () => {
  return (
    <Page>
      <MyWanted />
      <Propose />
      <ApplyResult />
      <BookMark />
      <MyLike />
    </Page>
  );
};

const Page = styled.main`
  ${flexColumn};
  min-height: 100vh - 60px;
  background-color: ${({ theme }) => theme.colors.bgGray};
`;

export default MyPage;
