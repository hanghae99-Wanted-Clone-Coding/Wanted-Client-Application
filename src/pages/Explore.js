import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { container } from "../mixin/container";
import { history } from "../redux/configStore";
import Card from "../components/Card";
import styled from "styled-components";
import Slider from "../components/Slider";
import FilterHeader from "../components/FilterHeader";
import TagModal from "../components/TagModal";
import LoginModal from "../components/LoginModal";
import {
  getJobgroupsDB,
  getAllOpeningsDB,
  getJobgroupOpeningsDB,
  getCareerResultsDB,
} from "../redux/modules/opening";

const Explore = (props) => {
  const dispatch = useDispatch();
  const jobGroups = useSelector((state) => state.opening.jobGroups) || [];
  const openingList = useSelector((state) => state.opening.openings) || [];

  useEffect(() => {
    dispatch(getJobgroupsDB());
    dispatch(getAllOpeningsDB());
  }, []);

  const clickJobGroup = (jobGroupId) => {
    history.push({
      pathname: "/",
      search: `?jobgroup=${id}`,
    });
    dispatch(getJobgroupOpeningsDB(jobGroupId));
  };
  const id = 1;

  const clickCareer = (career) => {
    history.push({
      pathname: "/",
      search: `?career=${career}`,
    });
    dispatch(getCareerResultsDB(career));
  };

  return (
    <>
      <Slider />

      {/* ↓↓↓ 테스트버튼입니다 - 서버와 연결할 때 삭제 필요 */}
      <button onClick={() => clickJobGroup(id)}>테스트 버튼</button>
      {/* ↑↑↑ 테스트버튼입니다. */}

      <Container>
        <FilterHeader />
        <TagModal />
        {/* <LoginModal></LoginModal> */}
        <CardContainer>
          {openingList.map((l, idx) => {
            return <Card key={idx} {...l} />;
          })}
        </CardContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  ${container};
`;

const CardContainer = styled.div`
  ${container};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  ${({ theme }) => theme.device.desktop} {
    grid-template-columns: repeat(4, 1fr);
  } ;
`;

export default Explore;
