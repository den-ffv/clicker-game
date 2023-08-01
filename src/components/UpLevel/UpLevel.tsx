import React, { useState } from "react";
import styleUpLevel from "./UpLevel.module.scss";
import cookieIcon from "/cookies-jar.png";

type TypeUpLevel = {
  priceToLevelUp: number;
  text: string;
  cookie: number;
  numberOfClicks: number,
  icon: string,
  setCookie: React.Dispatch<React.SetStateAction<number>>;
  setClicker: React.Dispatch<React.SetStateAction<number>>;
  clickToLevelUp: number;
  setClickToLevelUp: React.Dispatch<React.SetStateAction<number>>;
  fnPriceToLevelUp: React.Dispatch<React.SetStateAction<number>>;
};
const UpLevel: React.FC<TypeUpLevel> = ({
  priceToLevelUp,
  fnPriceToLevelUp,
  text,
  icon,
  numberOfClicks,
  setClickToLevelUp,
  clickToLevelUp,
  setClicker,
  
  cookie,
  setCookie,
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const [coutnForUpLeavel, setCoutnForUpLeavel] = useState(0);

  const clickSound = new Audio("/click1.mp3");

  const isMobile = window.innerWidth <= 1023;

  const handleClickLevelConponent = () => {
    if (cookie >= priceToLevelUp && clickToLevelUp === 0) {
      setCookie(cookie - priceToLevelUp);
      fnPriceToLevelUp( priceToLevelUp + (priceToLevelUp / 2));
      setClicker((prev) => prev + numberOfClicks);
      setCoutnForUpLeavel((prev) => prev + 1);
      setClickToLevelUp(5);

      clickSound.play();
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
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} onClick={handleClickLevelConponent} className={styleUpLevel.level} >
        <div className={styleUpLevel.level_content}>
          <img className={styleUpLevel.level_img} src={icon} width={30} alt='' />
          <p className={styleUpLevel.level_coutn}>
            {coutnForUpLeavel ? coutnForUpLeavel : ""}
          </p>
        </div>
        <div className={styleUpLevel.mobile} >
          <div className={styleUpLevel.mobile_content}>
            <div className={styleUpLevel.mobile_name}>
            <p>+ {numberOfClicks}</p>
              
            <p>{text}</p>
            </div>
            <div className={styleUpLevel.mobile_price}>
              <img className={styleUpLevel.mobile_img} src={cookieIcon} alt=''/>
              <p>{priceToLevelUp}</p>
            </div>
          </div>
        </div>
      </div>
      {isTooltipVisible && (
        <div className={styleUpLevel.tooltip} style={ {left: tooltipPosition.x + "px", top: tooltipPosition.y + "px",}} >
          <div className={styleUpLevel.tooltip_content}>
            <p>+ {numberOfClicks}</p>
            <p>{text}</p>
            <div className={styleUpLevel.tooltip_price}>
              <img
                className={styleUpLevel.tooltip_img}
                src={cookieIcon}
                alt=''
              />
              <p>{priceToLevelUp}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpLevel;
