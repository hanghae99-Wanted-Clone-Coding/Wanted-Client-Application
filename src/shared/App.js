import { BrowserRouter, Route } from "react-router-dom";
import Explore from "../pages/Explore";
import Opening from "../pages/Opening";
import MyPage from "../pages/MyPage";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";

import theme from "./theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Route path="/" exact component={Explore} />
          <Route path="/opening/:id" exact component={Opening} />
          <Route path="/MyPage" exact component={MyPage} />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
