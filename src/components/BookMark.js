import React from "react";
import MyListCard from "./MyListCard";
import MyPageSection from "../elements/MyPageSection";

const BookMark = (props) => {
  return (
    <MyPageSection title="북마크" link="총 2개 전체보기">
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

export default BookMark;
