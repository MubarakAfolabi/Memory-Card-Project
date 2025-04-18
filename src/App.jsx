import { useState } from "react";
import headerImg from "./assets/headerImg.png";
import arr from "./itemArray.js";
import "./App.css";

let idArr = [];

function App() {
  const [itemArr, setItemArr] = useState([...arr]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const shuffleArr = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleClick = (id) => {
    if (idArr.includes(id)) {
      alert("Whoops, Try Again");
      bestScore <= score ? setBestScore(score) : bestScore;
      idArr = [];
      setScore(0);
      setItemArr((prev) => [...prev], [...shuffleArr(itemArr)]);
    } else {
      idArr.push(id);
      setScore(score + 1);
      setItemArr((prev) => [...prev], [...shuffleArr(itemArr)]);
      console.log(idArr);
    }
  };

  return (
    <div className="body-container">
      <div className="dark-container">
        <header>
          <div className="logo-container">
            <img src={headerImg} />
            <span className="header-title">JOJO Memory Card</span>
          </div>
          <div className="score-container">
            <p>Score : {score}</p>
            <p>Best Score : {bestScore}</p>
          </div>
        </header>
        <main>
          <div className="grid-container">
            {itemArr.map((item) => {
              return (
                <div
                  key={item.id}
                  className="grid-item"
                  onClick={() => handleClick(item.id)}
                >
                  <div className="image-container">
                    <img src={item.imgName} />
                  </div>
                  <div className="name-container">
                    <p className="stand-name">{item.standName}</p>
                    <p className="stand-cry">"{item.standCry}"</p>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
