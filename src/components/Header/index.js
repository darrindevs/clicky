import React from "react";
import "./style.css";

function Header(props) {
  return (
  <div className="header">
    <div className="title">{props.children}</div>
      
      <div className="scores pt-3">
          <span className="small me-5 fst-italic">Only click each robot once!</span>
          <span className="score me-3">Score: {props.score}</span>
          <span className="highscore me-3">Highscore: {props.highscore}</span>
      </div>
      
      
  </div>
  );
}
 
export default Header;
