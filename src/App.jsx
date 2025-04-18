import "./App.css";
import headerImg from "./assets/headerImg.png";
import tusk from "./assets/grid/tusk.webp";
import echoes from "./assets/grid/echoes.webp";
import heavensDoor from "./assets/grid/heavens-door.webp";
import d4c from "./assets/grid/d4c.webp";
import wOfU from "./assets/grid/wOfu.webp";
import stickyFingers from "./assets/grid/sticky-fingers.webp";
import theWorld from "./assets/grid/the-world.webp";
import starPlatinum from "./assets/grid/star-platinum.webp";
import theHand from "./assets/grid/the-hand.webp";
import killerQueen from "./assets/grid/killer-queen.webp";
import softAndWet from "./assets/grid/soft-and-wet.webp";
import goldenExperience from "./assets/grid/golden-experience.webp";

function App() {
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
            <div className="grid-item">
              <div className="image-container">
                <img src={tusk} />
              </div>
              <div className="name-container">
                <p className="stand-name">Tusk Act 4</p>
                <p className="stand-cry">"chumimi~in"</p>
              </div>
            </div>
            <div className="grid-item">
              <div className="image-container">
                <img src={echoes} />
              </div>
              <div className="name-container">
                <p className="stand-name">Echoes Act 3</p>
                <p className="stand-cry">"S-H-I-T"</p>
              </div>
            </div>
            <div className="grid-item">
              <div className="image-container">
                <img src={heavensDoor} />
              </div>
              <div className="name-container">
                <p className="stand-name">Heaven's Door</p>
                <p className="stand-cry">"Hebunzu Doā"</p>
              </div>
            </div>
            <div className="grid-item">
              <div className="image-container">
                <img src={d4c} />
              </div>
              <div className="name-container">
                <p className="stand-name">Dirty Deeds Done Dirt Cheap</p>
                <p className="stand-cry">"Dī Fō Shī -Rabu Torein"</p>
              </div>
            </div>
            <div className="grid-item">
              <div className="image-container">
                <img src={wOfU} />
              </div>
              <div className="name-container">
                <p className="stand-name">Wonder of U</p>
                <p className="stand-cry">"Flow is always a calamity."</p>
              </div>
            </div>
            <div className="grid-item">
              <div className="image-container">
                <img src={stickyFingers} />
              </div>
              <div className="name-container">
                <p className="stand-name">Sticky Fingers</p>
                <p className="stand-cry">"ARI, ARI, ARI, ARI, Arrivederci! "</p>
              </div>
            </div>
            <div className="grid-item">
              <div className="image-container">
                <img src={theWorld} />
              </div>
              <div className="name-container">
                <p className="stand-name">The World</p>
                <p className="stand-cry">"Muda Muda Muda"</p>
              </div>
            </div>
            <div className="grid-item">
              <div className="image-container">
                <img src={starPlatinum} />
              </div>
              <div className="name-container">
                <p className="stand-name">Star Platinum</p>
                <p className="stand-cry">"Ora Ora Ora"</p>
              </div>
            </div>
            <div className="grid-item">
              <div className="image-container">
                <img src={theHand} />
              </div>
              <div className="name-container">
                <p className="stand-name">The Hand</p>
                <p className="stand-cry">"Za Hando"</p>
              </div>
            </div>
            <div className="grid-item">
              <div className="image-container">
                <img src={killerQueen} />
              </div>
              <div className="name-container">
                <p className="stand-name">Killer Queen</p>
                <p className="stand-cry">"Bites za Dusto"</p>
              </div>
            </div>
            <div className="grid-item">
              <div className="image-container">
                <img src={softAndWet} />
              </div>
              <div className="name-container">
                <p className="stand-name">Soft and Wet</p>
                <p className="stand-cry">"Ora Ora Ora"</p>
              </div>
            </div>
            <div className="grid-item">
              <div className="image-container">
                <img src={goldenExperience} />
              </div>
              <div className="name-container">
                <p className="stand-name">Golden Experience</p>
                <p className="stand-cry">"Muda Muda Muda"</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
