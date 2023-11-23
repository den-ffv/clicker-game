import { useState } from "react";
import "./Sidebar.scss";

import uaBtnIcon from "/icon/btn-icon-ua.svg";
import enBtnIcon from "/icon/btn-icon-en.svg";
import userIcon from "/icon/user-icon.svg";
import ratingIcon from "/icon/rating-icon.svg";
import storeIcon from "/icon/shop-icon.svg";
import { Link } from "react-router-dom";

function Sidebar() {
  const [language, setLanguage] = useState(true);

  const isAuth = true;

  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar__logo">
          <Link className="logo" to={"/"}>
            C
          </Link>
        </div>
        {isAuth ? (
          <Link
            to={"/profile"}
            className="sidebar__button sidebar__user-button"
          >
            <img src={userIcon} alt="" />
          </Link>
        ) : (
          <Link to={"/login"} className="sidebar__button sidebar__user-button">
            <img src={userIcon} alt="" />
          </Link>
        )}
      </div>
      <div >
        <Link className="sidebar__button" to={"/rating"}>
          <img src={ratingIcon} alt="rating icon" />
        </Link>
        <Link className="sidebar__button" to={"/store"}>
          <img src={storeIcon} alt="store icon" />
        </Link>
      </div>
      <div>
        <button
          onClick={() => setLanguage((prev) => !prev)}
          className="sidebar__button"
        >
          {language ? (
            <img src={uaBtnIcon} alt="ua" />
          ) : (
            <img src={enBtnIcon} alt="en" />
          )}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
