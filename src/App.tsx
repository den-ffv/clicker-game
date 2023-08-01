import { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import UpLevel from "./components/UpLevel/UpLevel";
import cookieIcon from "/cookies-jar.png";

function App() {
  const [maxClick, setMaxClick] = useState(1000); // clicks left
  const [clickToLevelUp, setClickToLevelUp] = useState(5); // left clicks to buy
  const [cookie, setCookie] = useState(1000); // cookies received
  const [clicker, setClicker] = useState(1);


  const [priceToUpLevelOne, setPriceToUpLevelOne] = useState<number>(100);
  const [priceToUpLevelTwo, setPriceToUpLevelTwo] = useState<number>(150);
  const [priceToUpLevelThree, setPriceToUpLevelThree] = useState<number>(500);
  const [priceToUpLevelFour, setPriceToUpLevelFour] = useState<number>(1000);

  // const [coutnForUpLeavel, setCoutnForUpLeavel] = useState(0);

  type TypeUpLevelItem = {
    id: number;
    value: string;
    image: string;
    priceToLevelUp: number;
    clicker: number;
    fn: React.Dispatch<React.SetStateAction<number>>;
  };

  const upLevelItems: TypeUpLevelItem[] = [
    { id: 1, value: "Click", image: "/click.svg", priceToLevelUp: priceToUpLevelOne, clicker: 2, fn: setPriceToUpLevelOne },//100
    { id: 2, value: "Mause", image: "/mause.svg", priceToLevelUp: priceToUpLevelTwo, clicker: 10, fn: setPriceToUpLevelTwo },//150
    { id: 3, value: "Bob", image: "/mushroom.svg", priceToLevelUp: priceToUpLevelThree, clicker: 20, fn: setPriceToUpLevelThree },//500 25%
    { id: 5, value: "Emerald", image: "/emerald.svg", priceToLevelUp: priceToUpLevelFour, clicker: 50, fn: setPriceToUpLevelFour },//1000 50%
  ];

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "m";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    } else {
      return num.toString();
    }
  };

  return (
    <div className='wrapper'>
      <div className='game'>
        <p className='game__max-click'>Clicks: {maxClick}</p>
        <div className='clicker-content'>
          <Button
            clicker={clicker}
            cookie={cookie}
            setCookie={setCookie}
            maxClick={maxClick}
            setMaxClick={setMaxClick}
            clickToLevelUp={clickToLevelUp}
            setClickToLevelUp={setClickToLevelUp}
          />
        </div>
        <p className='game__max-click'>
          <img width={40} src={cookieIcon} alt='' />
          {formatNumber(cookie)}
        </p>
        <p className='game__max-click'>clicks till reroll: {clickToLevelUp}</p>
      </div>
      <div className='levels'>
        <h2>Store</h2>
        <div className="levels-content">

        {upLevelItems.map((upLevelItem) => (
          <UpLevel
          key={upLevelItem.id}
          text={upLevelItem.value}
          priceToLevelUp={upLevelItem.priceToLevelUp}
          fnPriceToLevelUp={upLevelItem.fn}
          numberOfClicks={upLevelItem.clicker}
          icon={upLevelItem.image}
          setClicker={setClicker}
          setClickToLevelUp={setClickToLevelUp}
          clickToLevelUp={clickToLevelUp}
          
          cookie={cookie}
          setCookie={setCookie}
          />
          ))}
          </div>
      </div>
    </div>
  );
}

export default App;
