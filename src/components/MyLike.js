import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import MyPageSection from "../elements/MyPageSection";
import MyListCard from "./MyListCard";

const MyLike = (props) => {
  const { history } = props;
  // const dispatch = useDispatch();
  const myLikeList = useSelector((state) => state.user.user.likeList) || [];

  return (
    <>
      <MyPageSection title="좋아요" link="총 5개 전체보기">
        <LikeListBox>
          {myLikeList.map((l, idx) => {
            return (
              <MyListCard
                key={idx}
                {...l}
                onClick={() => {
                  history.push(`/opening/` + idx);
                }}
              ></MyListCard>
            );
          })}
        </LikeListBox>
      </MyPageSection>
    </>
  );
};

const LikeListBox = styled.div`
  height: 370px;
  overflow: hidden;
`;

export default MyLike;
