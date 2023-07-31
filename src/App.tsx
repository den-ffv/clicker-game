import { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import UpLevel from "./components/UpLevel/UpLevel";
import cookieIcon from "/cookies-jar.png"

function App() {
  const [maxClick, setMaxClick] = useState(1000) // clicks left
  const [clickToLevelUp, setClickToLevelUp] = useState(5)// left clicks to buy
  const [cookie, setCookie] = useState(0) // cookies received
  const [clicker, setClicker] = useState(1)
  const [priceToUpLevelForClick, setPriceToUpLevelForClick] = useState(10)


  const [coutnForUpLeavel, setCoutnForUpLeavel] = useState(0)

  const upLevelItems = [
    {id: 1, value: "", image: " ", price: " ", fn: "" },
    {id: 2, value: " ", image: " ", price: " ", fn: "" },
    {id: 3, value: " ", image: " ", price: " ", fn: "" },
    {id: 4, value: " ", image: " ", price: " ", fn: "" },
    {id: 5, value: " ", image: " ", price: " ", fn: "" },
  ]

 const formatNumber = (num : number):string => {
    if (num >= 1000000 ) {
      return (num / 1000000 ).toFixed(1) + 'm'
    }else if(num >= 1000){
      return (num / 1000).toFixed(1) + 'k'
    }else{
      return num.toString()
    }
  }

  return (
    <div className="wrapper">
      <div className='game'>
        <p className="game__max-click">Clicks: {maxClick}</p>
        <div className='clicker-content'>
          <Button clicker={clicker} cookie={cookie} setCookie={setCookie} maxClick={maxClick} setMaxClick={setMaxClick} clickToLevelUp={clickToLevelUp} setClickToLevelUp={setClickToLevelUp}/>
        </div>
        <p className="game__max-click"><img width={40} src={cookieIcon} alt="" />{formatNumber(cookie)}</p>
        <p className="game__max-click">clicks till reroll: {clickToLevelUp}</p>
      </div>
      <div className="levels">
        <h2>Store</h2>
        <UpLevel setCoutnForUpLeavel={setCoutnForUpLeavel} coutnForUpLeavel={coutnForUpLeavel} setClicker={setClicker} setClickToLevelUp={setClickToLevelUp} clickToLevelUp={clickToLevelUp} price={priceToUpLevelForClick} setPriceToUpLevelForClick={setPriceToUpLevelForClick} cookie={cookie} setCookie={setCookie}/>
      </div>
    </div>
  );
}

export default App;
