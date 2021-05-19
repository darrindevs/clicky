import React from "react";
import "./style.css";

function Header(props) {
  return <div className="header">
            <div className="title">{props.children}</div>
              <div className="scores">
                <span className="score">Score: {props.score}</span>
                <span className="highscore">Highscore: {props.highscore}</span>
              </div>
          </div>;
}
 
export default Header;