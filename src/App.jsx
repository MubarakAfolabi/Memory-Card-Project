import { useState } from "react";
import headerImg from "./assets/headerImg.png";
import arr from "./itemArray.js";
import "./App.css";

function App() {
  const [itemArr, setItemArr] = useState([...arr]);

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
                <div key={item.id} className="grid-item">
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
