import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Deatail } from "./Pages/detail/Detail";
import { Search } from "./Pages/search/Search";
import { routes } from "./Routes";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={routes.home} element={<Home />}></Route>
        <Route path={routes.detail} element={<Deatail />}></Route>
        <Route path={routes.search} element={<Search />}></Route>
        <Route path={"/*"} element={""}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
