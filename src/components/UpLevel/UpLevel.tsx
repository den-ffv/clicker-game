import React, { useState } from "react";
import styleUpLevel from "./UpLevel.module.scss";
import icon from "/pngwing.png";

type TypeUpLevel = {
  price: number;
  cookie: number;
  setCookie: React.Dispatch<React.SetStateAction<number>>;
  setClicker: React.Dispatch<React.SetStateAction<number>>;
  setPriceToUpLevelForClick: React.Dispatch<React.SetStateAction<number>>;
  clickToLevelUp: number;
  setClickToLevelUp: React.Dispatch<React.SetStateAction<number>>;
};
const UpLevel: React.FC<TypeUpLevel> = ({
  setPriceToUpLevelForClick,
  setClickToLevelUp,
  clickToLevelUp,
  setClicker,
  price,
  cookie,
  setCookie,
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleClickLevelConponent = () => {
    if (cookie >= price && clickToLevelUp === 0) {
      setCookie(cookie - price);
      setPriceToUpLevelForClick((prev) => prev * 2);
      setClicker((prev) => prev + 2);
      setClickToLevelUp(5);
      console.log(123123);
    }
  };

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={handleClickLevelConponent}
        className={styleUpLevel.level}
      >
        <img className={styleUpLevel.level_img} src={icon} width={30} alt='' />
        <p>cookie click {price}</p>
      </div>
      {isTooltipVisible && (
        <div
          className={styleUpLevel.tooltip}
          style={{
            left: tooltipPosition.x + "px",
            top: tooltipPosition.y + "px",
          }}
        >
          + 1
        </div>
      )}
    </>
  );
};

export default UpLevel;
