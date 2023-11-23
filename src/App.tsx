import { useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Game from "./pages/Game";
import Sidebar from "./components/Sidebar/Sidebar";
import Rating from "./pages/Rating";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import Store from "./pages/Store";
import StatusBar from "./components/StatusBar/StatusBar";

function App() {
  // const [currentLanguage, setCurrentLanguage] = useState(
  //   localStorage.getItem('language'),
  // );

  // window.localStorage.setItem(
  //   'language',
  //   currentLanguage == null ? 'ua' : currentLanguage,
  // );

  // const translations =
  //   localStorage.getItem('language') === 'ua'
  //     ? ukrainianTranslations
  //     : englishTranslations;

  return (
    <div>
      <Sidebar />
      <div className="margen-content wrapper">
        <Routes>
          <Route path={"/"} element={<Game />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/registr"} element={<Registration />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/store"} element={<Store />} />
          <Route path={"/rating"} element={<Rating />} />
        </Routes>
      </div>
      <StatusBar/>
    </div>
  );
}

export default App;
