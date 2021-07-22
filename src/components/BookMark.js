import React from "react";
import MyListCard from "./MyListCard";
import MyPageSection from "../elements/MyPageSection";

const BookMark = (props) => {
  return (
    <MyPageSection title="북마크" link="총 2개 전체보기" marginBt="-1px">
      <MyListCard
        imgUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
        title="[토스코어] Frontend Developer"
        company="비바리퍼블리카(토스)"
        location="서울·한국"
      />
      <MyListCard
        imgUrl="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        title="[토스코어] Frontend Developer"
        company="비바리퍼블리카(토스)"
        location="서울·한국"
      />
    </MyPageSection>
  );
};

export default BookMark;
