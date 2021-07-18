import React from "react";
import styled from "styled-components";
export default function Slide({ img }) {
  return (
      <>
        {/* <IMG src={img} /> */}
        <JobBtn><Span>소프트웨어 엔지니어</Span></JobBtn>
      </>
      
  );
}

Slide.defaultProps = {
    img: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
}



const JobBtn = styled.div`
    display: table;
    width: 120px;
    height: 60px;
    border-radius: 5px;
    
    margin-right: 10px;
    flex-shrink: 0;
    
    border: 1px solid black;
`;

const Span = styled.span`
    display: table-cell;
    // color: white;
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
`;