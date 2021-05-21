# Click the Robots! 🤖

Click on each robot only once to master this React game and become master of the galaxy! 

[Deployed App](https://darrindevs.github.io/clicky/)

## Technologies Used

⚛️ React - React is an open-source front-end JavaScript library for building user interfaces or UI components.

🏗 JavaScript - JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.

📦 npm - npm is a package manager for the JavaScript programming language.

☑️ Git - Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.

😺 GitHub - GitHub, Inc. is a provider of Internet hosting for software development and version control using Git.


## Code Snippet 

~~~
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
~~~

## Author

🤓 [darrindevs](https://github.com/darrindevs)

