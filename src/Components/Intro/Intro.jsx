import React from "react";
import './Intro.css';


import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="Intro">
      <div className="i-left">
        <div className="i-name">
          <spam>Hy! I Am</spam>
          <spam>Yuvraj Kushwaha</spam>
          <spam>Aspiring Software Developer</spam>
          <span>Pre Finel year at</span>
          <spam>Jodhpur Instutions of Engineering and Technology</spam>
          <spam>Pursuing Computer Science and Engineering</spam>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href='https://github.com/yuvrajkumar12'> <img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/yuvraj-kumar-28a322253/"><img src={LinkedIn} alt="" /></a>
          <a href="https://www.instagram.com/maurya_yuvraj44/"><img src={Instagram} alt="" /></a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <div className="yu">
        <img src={boy} alt="" />
        </div>
        <img src={glassesimoji} alt="" />
        <div style={{top:"-4%",left:"68%"}}>
         <FloatingDiv image={Crown} txt1="Web" txt2="Develpoer"/>
        </div>
        <div style ={{top:"18rem" ,left:"0rem"}}>
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award"/>
        </div>
        {/* blur div*/}
        <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
        <div className="blur"
        style={{
          background:'#CIF5FF',
          top:'17rem',
          width:'12rem',
          height:'11rem',
          left:'-9rem'
        }}
        ></div>
      </div>
    </div>
  )
}

export default Intro