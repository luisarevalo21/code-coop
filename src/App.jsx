import { useState } from "react";
import Card from "./components/Card";
import homeImage from "./assets/home.jpg";
import collaborating from "./assets/collaborating.jpg";
import collaborating2 from "./assets/collaborating3.jpg";
import collaborating3 from "./assets/collaborating3.jpg";
import meeting from "./assets/meeting.jpg";
import "./App.css";

function App() {
  return (
    <div>
      <div className="header">
        <img src={homeImage} alt="main image" className="header__image" />
        <p className="month"> November 2023</p>
        <div className="volume">
          <p className="volume__vol volume__vol--white">Volume</p>
          <p className="volume__num">1</p>
        </div>
      </div>

      <main className="main">
        <div className="main__cont">
          <h1 className="main__title main__title--blue">Code</h1>
          <h1 className="main__title ">CoOp</h1>
          <div className="newsletter">
            <p>The</p>
            <p>Newsletter</p>
          </div>
        </div>

        <div className="main__description">
          <h3 className="main__description__title">10 million users and counting</h3>
          <h6 className="main__description__subtitle main__description--blue"> By Connor Hamilton</h6>

          <p className="main__description__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus corrupti officia dolorem nostrum
            suscipit nam odio molestiae esse eveniet omnis? Ab nisi commodi sequi dolore optio cupiditate dicta eaque
            veritatis.
          </p>
          <p className="main__description__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est inventore eligendi repudiandae beatae ipsam
            libero tenetur laboriosam numquam a velit modi, labore reiciendis explicabo nesciunt.
          </p>
        </div>

        <div className="main__details">
          <a href="" className="main__read">
            Read More --{">"}
          </a>

          <div className="main__circle"></div>

          <a href="" className="main__social">
            Follow us @reallygreatsite
          </a>
        </div>
      </main>

      <div className="cards">
        <Card
          image={collaborating}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita. Deserunt minus dolorum voluptatem sed nulla! Eum facilis sit velit nulla perferendis minima nesciunt inventore."
        />
        <Card
          image={collaborating2}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita. Deserunt minus dolorum voluptatem sed nulla! Eum facilis sit velit nulla perferendis minima nesciunt inventore."
        />
        <Card
          image={collaborating3}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita. Deserunt minus dolorum voluptatem sed nulla! Eum facilis sit velit nulla perferendis minima nesciunt inventore."
        />
        <Card
          image={meeting}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita. Deserunt minus dolorum voluptatem sed nulla! Eum facilis sit velit nulla perferendis minima nesciunt inventore."
        />
      </div>
    </div>
  );
}

//adjust css for mobile
//then expand to desktop
export default App;
