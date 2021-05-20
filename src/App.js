import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import robots from "./robots.json";

class App extends Component {
//todo track the state of clicked cards
state = {
  robots,
  score: 0,
  highscore: 0
};

//✅todo increment the score when cards clicked
clickCount = () => {
  //use the setState method to update a component's state
  this.setState({ score: this.state.score + 1 });
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
