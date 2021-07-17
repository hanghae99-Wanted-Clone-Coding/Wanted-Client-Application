import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { shape, src, size } = props;

  const styles = {
    src,
    size,
  };

  return <ImageRectangle {...styles}></ImageRectangle>;
};

Image.defaultProps = {
  // shape: "Inner",
  src: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
};

const ImageRectangle = styled.div`
  top: 0;
  left: 0;
  padding-top: 75%;
  overflow: hidden;
  border: 1px solid #dddddd;
  border-radius: 5px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

export default Image;
