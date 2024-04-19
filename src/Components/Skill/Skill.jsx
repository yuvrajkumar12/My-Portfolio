import React from 'react'
import './Skill.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from 'D:/PROJECT/portfolio-start/src/Components/Skill/Yuvraj_kuma.pdf';

function Skill() {
  return (
    <div className="services">
      {/*Left side*/}
      <div className="awesome">
        <span>My Skill</span>
        <spane>
          Passonate Software Engineer
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Downloade CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right side*/}
      <div className="cards">
        <div style={{ top:'-3rem',left: '15rem' }}>
          <Card
            emoji={HeartEmoji}
            heading={'Non-technical'}
            detail={"TeamWork,Leadership"} />
        </div>
      </div>
      <div className="cards">
        <div style={{ top: '9rem', left: '-2rem' }}>
          <Card
            emoji={HeartEmoji}
            heading={'Programing Language'}
            detail={"C++,Java"} />
        </div>
      </div>
      <div className="cards">
        <div style={{ top: '16rem', left: '14rem' }}>
          <Card
            emoji={HeartEmoji}
            heading={'Development'}
            detail={"HTML,CSS,Bootstrap"} />
        </div>
      </div>
      <div className="cards">
        <div style={{ top:'9rem',left: '32rem' }}>
          <Card
            emoji={HeartEmoji}
            heading={'Version Control'}
            detail={"Git, Github"} />
        </div>
      </div>
      <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
      
    </div>
  );
}
export default Skill