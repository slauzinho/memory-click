import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import GameHeader from "./components/GameHeader";
import Instructions from "./components/Instructions";
import ImageCard from "./components/ImageCard";
import Footer from "./components/Footer";
import cats from "./cats.js";

const theme = {
  primary: "#5f205f",
  secondary: "#282828"
};

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? "white" : "black")};
    font-family: Roboto;
    font-size: 60px;
    color: red;
  }
`;

const GameContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;

  @media (max-width: );
`;

// Algorithm for shuffling cards
const shuffle = arr => {
  let i, j, temp;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

class App extends Component {
  // setting initial state
  state = {
    cats,
    clicked: new Set(),
    correct: 0,
    totalGuesses: 0,
    wasCorrect: false,
    hasClicked: false,
    resetGame: false,
    winOrLose: false
  };

  winOrLose = (correct, totalGuesses) => {
    alert(
      `Good Game! Your total score is ${this.state.correct} points out of ${
        this.state.totalGuesses
      }. Keep Guessing?`
    );
  };

  resetGame = (corect, totalGuesses) => {
    this.setState({
      correct: 0,
      totalGuesses: 0,
      resetGame: true,
      hasClicked: false
    });
  };

  // increment correct guesses score
  scoreUp = (correct, props) => {
    this.setState({
      correct: this.state.correct + 1,
      wasCorrect: true
    });
  };

  // sets new Set when user clicks, and shuffles cards onClick
  allTheThings = id => {
    this.setState({
      totalGuesses: this.state.totalGuesses + 1,
      clicked: new Set([...this.state.clicked, id]),
      cats: shuffle(this.state.cats),
      hasClicked: true
    });

    if (!this.state.clicked.has(id)) {
      this.scoreUp();
    } else {
      this.setState({ wasCorrect: false });
    }

    if (this.state.totalGuesses === 12) {
      this.setState({ winOrLose: true, resetGame: true });
      this.winOrLose();
      this.resetGame();
    }
  };
  render() {
    return (
        <ThemeProvider theme={theme}>
      <div>
          <GameHeader
            correct={this.state.correct}
            totalGuesses={this.state.totalGuesses}
            wasCorrect={this.state.wasCorrect}
            hasClicked={this.state.hasClicked}
            resetGame={this.state.resetGame}
            winOrLose={this.state.winOrLose}
          />
          <Instructions />
          <GameContainer>
            {this.state.cats.map((cat, count) => (
              <ImageCard
                key={cat.id}
                id={cat.id}
                image={cat.image}
                onClick={() => this.allTheThings(cat.id)}
              />
            ))}
          </GameContainer>
          <Footer correct={this.correct} totalGuesses={this.totalGuesses} />
          <GlobalStyle whiteColor />
      </div>
        </ThemeProvider>
    );
  }
}

export default App;
