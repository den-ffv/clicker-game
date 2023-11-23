import React, { useState } from "react";
import "./UpLevel.scss";
import imageLevelUp from "/cursor.png";
import exclamationPoint from "/icon/exclamation-point.svg";



const UpLevel = () => {
  const [levelPopUpOpen, setLevelPopUpOpen] = useState<boolean>(false);

  const handelClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setLevelPopUpOpen((prev) => !prev);
  };

  return (
    <div className="up-level">
      <div className="up-level__container">
        <img className="up-level__image" src={imageLevelUp} alt="level image" />
        <h2 className="up-level__title">Bust click</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button className="up-level__buy">+</button>
          <p className="up-level__prise">200</p>
          <button onClick={handelClick} className="up-level__button">
            <img src={exclamationPoint} alt="exclamation-point" />
          </button>
        </div>
      </div>
      <div
        className={
          levelPopUpOpen ? "up-level__pup-up open" : "up-level__pup-up"
        }
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A minima
          quidem doloremque, totam debitis excepturi, nostrum, odit blanditiis
          possimus laboriosam voluptas.
        </p>
        <p>Bought : {3}</p>
      </div>
    </div>
  );
};

export default UpLevel;
