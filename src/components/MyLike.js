import React from "react";
import MyPageSection from "../elements/MyPageSection";
import MyListCard from "./MyListCard";

const MyLike = (props) => {
  return (
    <MyPageSection title="좋아요" link="총 5개 전체보기">
      <MyListCard
        title="[토스코어] Frontend Developer"
        company="비바리퍼블리카(토스)"
        location="서울·한국"
      />
      <MyListCard
        title="[토스코어] Frontend Developer"
        company="비바리퍼블리카(토스)"
        location="서울·한국"
      />
    </MyPageSection>
  );
};

export default MyLike;
