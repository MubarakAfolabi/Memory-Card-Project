import "./App.css";
import headerImg from "./assets/headerImg.png";

function App() {
  return (
    <div className="container">
      <header>
        <img src={headerImg} />
        <span className="header-title">JOJO Memory Card</span>
      </header>
    </div>
  );
}

export default App;
