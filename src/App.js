import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import robots from "./robots.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    robots: robots
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const robots = this.state.robots.filter(robot => robot.id === id);
    // Set this.state.friends equal to the new friends array
    this.setState({ robots: robots });
  };

  //todo track the state of clicked cards

  //todo increment the score when cards clicked

  //todo shuffle the cards after a card is clicked


  //✅ todo display the score + high score in the header 

  //todo style the header 

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header />
        {this.state.robots.map(robot => (
          <Card
            countRobot={this.countRobot}
            id={robot.id}
            key={robot.id}
            name={robot.name}
            image={robot.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
