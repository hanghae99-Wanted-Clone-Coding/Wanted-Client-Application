import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { history } from "../redux/configStore";
import Slider from "react-slick";
import { container, flex } from "../mixin";
// import { BsChevronLeft } from "react-icons/bs";
import { imgAry } from "../assets/btnImgs/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getJobgroupOpeningsDB } from "../redux/modules/opening";

const JobGroups = ({ list }) => {
  const dispatch = useDispatch();

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 4,
    slidesToScroll: 3,
    // prevArrow: <ArrowLeft />,
    // nextArrow: <BsChevronLeft />,
  };

  const clickJobGroup = (id) => {
    history.push({
      pathname: "/explore",
      search: `?jobgroup=${id}`,
    });
    dispatch(getJobgroupOpeningsDB(id));
  };

  return (
    <Btns {...settings}>
      {list.map((item, idx) => {
        let bgIdx = idx;
        if (idx >= imgAry.length) {
          bgIdx = idx - imgAry.length;
        }
        return (
          <JobBtn
            key={item.groupId}
            bgImg={imgAry[bgIdx]}
            onClick={() => clickJobGroup(item.groupId)}
          >
            <JobName>{item.name}</JobName>
          </JobBtn>
        );
      })}
    </Btns>
  );
};

JobGroups.defaultProps = {
  list: [],
};

const Btns = styled(Slider)`
  ${container};
  ${flex};
  .slick-slide div {
    padding: 0 10px;
    overflow: hidden;
    height: 60px;
  }

  .slick-list {
    min-width: 100%;
  }
`;

const JobBtn = styled.button`
  ${flex};
  position: relative;
  flex-shrink: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.white};
  background-image: ${(props) => `url(${props.bgImg})`};
  background-size: cover;
  border-radius: 3px;
  font-weight: 700;
  word-break: keep-all;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    border-radius: 3px;
    opacity: 0.4;
  }
`;

const JobName = styled.p`
  position: relative;
  z-index: 10;
`;

export default JobGroups;
