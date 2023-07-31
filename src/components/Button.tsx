import React from "react";
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
  const clickCookie = new Audio("/clickCookie.mp3");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (clickToLevelUp > 0) {
      setClickToLevelUp(clickToLevelUp - 1);
    }
    if (maxClick > 0) {
      setMaxClick(maxClick - 1);
      setCookie(cookie + clicker);
      e.preventDefault();
      const stars = document.createElement("div");
      stars.textContent = `+${clicker}`;
      stars.classList.add(`${btnStyle.zurochka}`);
      stars.style.left = `${e.clientX}px`;
      stars.style.top = `${e.clientY}px`;

      document.body.appendChild(stars);

      stars.addEventListener("animationend", () => {
        stars.remove();
      });

      clickCookie.volume = 0.1;
      clickCookie.play();
    }
  };

  return (
    <>
      <button type='button' onClick={handleClick} className={btnStyle.button}>
        <img className={btnStyle.img} src={cookieImage} />
      </button>
    </>
  );
};

export default Button;
