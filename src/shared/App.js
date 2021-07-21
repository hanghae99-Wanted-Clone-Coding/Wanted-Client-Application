import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import Explore from "../pages/Explore";
import Opening from "../pages/Opening";
import MyPage from "../pages/MyPage";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import KakaoRedirect from "../pages/KakaoRedirect";

import theme from "./theme";
import Header from "../components/Header";
import Main from "../pages/Main";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ConnectedRouter history={history}>
          <Header />
          <Route path="/" exact component={Main} />
          <Route path="/explore" exact component={Explore} />
          <Route path="/opening/:openingId" exact component={Opening} />
          <Route path="/mypage" exact component={MyPage} />
          <Route path="/user/kakao/callback" component={KakaoRedirect} />
        </ConnectedRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
