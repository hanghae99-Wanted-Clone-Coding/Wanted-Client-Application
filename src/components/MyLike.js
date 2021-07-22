import React from "react";
import { useDispatch, useSelector } from "react-redux";

import MyPageSection from "../elements/MyPageSection";
import MyListCard from "./MyListCard";

const MyLike = (props) => {
  const {history} = props;
  const dispatch = useDispatch();
  const myLikeList = useSelector((state) => state.user.user.likeList) || [];


  return (
    <>
      <MyPageSection title="좋아요" link="총 5개 전체보기">
        {/* <MyListCard
          title="[토스코어] Frontend Developer"
          company="비바리퍼블리카(토스)"
          location="서울·한국"
        />
        <MyListCard
          title="[토스코어] Frontend Developer"
          company="비바리퍼블리카(토스)"
          location="서울·한국"
        /> */}
        {myLikeList.map((l, idx) => {
          return(
            <MyListCard key={idx} onClick={() => {
              history.push(`/opening/`+idx);
            }}></MyListCard>
          )
        })}

      </MyPageSection>
    </>
  );
};



export default MyLike;
