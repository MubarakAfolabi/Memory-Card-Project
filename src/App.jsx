import { useState } from "react";
import headerImg from "./assets/headerImg.png";
import arr from "./itemArray.js";
import "./App.css";

let idArr = [];

function App() {
  const [itemArr, setItemArr] = useState([...arr]);

  const shuffleArr = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleClick = (id) => {
    if (idArr.includes(id)) {
      alert("Too Bad");
      idArr = [];
      setItemArr((prev) => [...prev], [...shuffleArr(itemArr)]);
    } else {
      idArr.push(id);
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
            <p>Score : 0</p>
            <p>Best Score : 0</p>
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
