import { BrowserRouter, Route } from "react-router-dom";
import Explore from "../pages/Explore";
import Opening from "../pages/Opening";
import MyPage from "../pages/MyPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={Explore} />
        <Route path="/opening/:id" exact component={Opening} />
        <Route path="/MyPage" exact component={MyPage} />
      </BrowserRouter>
    </>
  );
};

export default App;
