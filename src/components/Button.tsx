import React, { useState } from "react";
import btnStyle from "./Button.module.scss";
import cookieImage from "/cookie.png";

type TypeButtonProps = {
  clicker: number;
  maxClick: number;
  setMaxClick: React.Dispatch<React.SetStateAction<number>>;
  clickToLevelUp: number;
  setClickToLevelUp: React.Dispatch<React.SetStateAction<number>>;
  cookie: number;
  setCookie: React.Dispatch<React.SetStateAction<number>>;
};

const Button: React.FC<TypeButtonProps> = ({
  clicker,
  cookie,
  setCookie,
  maxClick,
  setMaxClick,
  clickToLevelUp,
  setClickToLevelUp,
}) => {
  const handleClick = (e: any) => {
    if (clickToLevelUp > 0) {
      setClickToLevelUp(clickToLevelUp - 1);
    }
    if (maxClick > 0) {
      setMaxClick(maxClick - 1);
      setCookie(cookie + clicker);
      e.preventDefault()
      const stars = document.createElement("div");
      stars.textContent = `+${clicker}`;
      stars.classList.add(`${btnStyle.zurochka}`);
      const randomX = e.clientX + Math.floor(Math.random() * 30) - 15;
      const randomY = e.clientY + Math.floor(Math.random() * 30) - 15;
      stars.style.left = `${randomX}px`;
      stars.style.top = `${randomY}px`;

      document.body.appendChild(stars);

      stars.addEventListener("animationend", () => {
        stars.remove();
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if ( e.code == "Space") {
      handleClick(e);
    }
  };

  return (
    <>
      <button  onKeyDown={handleKeyPress} type='button' onClick={handleClick} className={btnStyle.button}>
        <img className={btnStyle.img} src={cookieImage} />
      </button>
    </>
  );
};

export default Button;
