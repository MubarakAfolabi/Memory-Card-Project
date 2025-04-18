import { useState, useEffect } from "react";
import headerImg from "./assets/headerImg.png";
import dioGif from "./assets/gifImages/dio-gif.gif";
import josephGif from "./assets/gifImages/joseph-gif.gif";
import arr from "./itemArray.js";
import "./App.css";

let idArr = [];

function App() {
  const [itemArr, setItemArr] = useState([...arr]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isVisible, setVisible] = useState(false);

  const dioAudio = new Audio("./audios/dio-wryyy.mp3");

  const shuffleArr = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleClick = (id) => {
    if (idArr.includes(id)) {
      setVisible(true);
      dioAudio.play();
    } else {
      idArr.push(id);
      setScore((score) => score + 1);
      setItemArr((prev) => [...prev], [...shuffleArr(itemArr)]);
    }
  };

  const handlePopUpClick = () => {
    bestScore <= score ? setBestScore(score) : bestScore;
    idArr = [];
    setScore(0);
    setItemArr((prev) => [...prev], [...shuffleArr(itemArr)]);
    setVisible(false);
  };

  useEffect(() => {
    if (score === 12) {
      const josephSound = new Audio("./audios/joseph-nice.mp3");
      josephSound.play();
      setVisible(true);
    }
  }, [score]);

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
        <div
          className="failed-container"
          style={{ display: isVisible ? "block" : "none" }}
        >
          <div className="gif-container">
            <img src={score === 12 ? josephGif : dioGif} />
            <span>{score === 12 ? "Niceee" : "Whoops"}</span>
            <p>
              {score === 12
                ? "You picked all without breaking a sweat"
                : "You already picked this card"}
            </p>
            <button onClick={() => handlePopUpClick()}>
              {score === 12 ? "Play Again" : "Try Again"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
