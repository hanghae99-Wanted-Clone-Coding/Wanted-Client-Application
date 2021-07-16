import React from "react";
import styled from "styled-components";

const IconBtn = (props) => {
  const { icon, show } = props;
  return <Btn show={show ? show : null}>{icon}</Btn>;
};

IconBtn.defaultProps = {
  icon: "",
  show: "",
};

const Btn = styled.button`
  padding: 0 10px;
  font-size: 18px;
`;

export default IconBtn;
