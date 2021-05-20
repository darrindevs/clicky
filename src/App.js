import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import robots from "./robots.json";

class App extends Component {
//✅ todo track the state of clicked cards
state = {
  robots,
  score: 0,
  highscore: 0, 
  clicked: []

};

//✅ todo increment the score when cards clicked
clickCount = (id) => {
  //if the clicked id already exists reset the clicked array and score to 0 
  if (this.state.clicked.indexOf(id) !== -1) {
    this.setState(
      { clicked: [],
        score: 0
      }
    );
    //and alert user game over 
    alert(`Oops! Game over! Your score: ${this.state.score}`);
  } else {
  //otherwise keep track of newly clicked in the state and increment 
  var newClicked = this.state.clicked;
  newClicked.push(id);//add the newly clicked elements to the array 
  this.setState({ clicked: newClicked });// and reset the state of clicked to include newClicked 
  this.setState({ score: this.state.score + 1 });// increment the score 
  this.state.robots.sort(() => Math.random() - 0.5); //shuffle the robots! 
  }
};

//todo display the score + high score in the header 
//todo style the header 

  // Map over this.state.robots and render a Card component for each robot object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Click the Robots!</Header>
        {this.state.robots.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
