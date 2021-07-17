import React from "react";
import styled from "styled-components";
import MainText from "../elements/MainText";

const OpeningBody = (props) => {
  const showMainText = () => {
    return (
      <MainText>
        [보이스루는 차별화된 기술력으로 콘텐츠번역(영상, 웹툰, 웹소설)을
        제공하는 플랫폼입니다].
        <br />
        <br />
        전통적인 번역회사와 달리, 보이스루는 기술(Technology)와 제품(Product)을
        바탕으로 콘텐츠번역의 생산성을 혁신하여, 더 합리적인 번역을 제공합니다.
        이를 위해 지금까지 수작업에 의존하던 과업들을 새로운 방식으로
        해결합니다. 귀찮고 지루한 일들을 최소화하여 번역가들이 탁월한 번역에만
        몰두할 수 있도록, 보이스루는 혁신을 거듭하고 있습니다.
        <br />
        <br />
        보이스루는 2019년 유튜브 자막 번역에서 출발하여 빠르게 성장하면서
        독자적인 프로세스를 구축했습니다. 그리고 이제 유튜브를 넘어 고급영상,
        웹툰, 웹소설에 이르기까지 사업을 성공적으로 확장하였습니다. 2020년에는
        시리즈A 투자를 유치하였고, 최근에는 더욱 빠른 성장을 위해 준비하고 있는
        팀입니다.
      </MainText>
    );
  };

  return (
    <section>
      <MainTextBox>{showMainText()}</MainTextBox>

      <dl>
        <dt>마감일</dt>
        <dd>상시</dd>

        <dt>근무지역</dt>
        <dd>서울 서초구 강남대로 311, 드림플러스 13층 1301호</dd>
      </dl>
    </section>
  );
};

const MainTextBox = styled.div`
  padding-top: 20px;
  padding-bottom: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  ${({ theme }) => theme.device.tablet} {
    padding-bottom: 80px;
  }
`;

export default OpeningBody;
