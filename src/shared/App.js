import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import { useDispatch } from "react-redux";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import KakaoRedirect from "../pages/KakaoRedirect";
import { actionCreators as userActions } from "../redux/modules/user";

import Main from "../pages/Main";
import Explore from "../pages/Explore";
import Opening from "../pages/Opening";
import MyPage from "../pages/MyPage";

import theme from "./theme";
import Header from "../components/Header";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.loginCheckDB());
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ConnectedRouter history={history}>
          <Header />
          {/* <Route path="/" exact component={Main} /> */}
          <Route path="/" exact component={Explore} />
          <Route path="/opening/:openingId" exact component={Opening} />
          <Route path="/mypage" exact component={MyPage} />
          <Route path="/user/kakao/callback" component={KakaoRedirect} />
        </ConnectedRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
