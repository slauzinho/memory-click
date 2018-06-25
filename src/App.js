import React, { Component } from "react";
import styled from "styled-components";
import GameHeader from "./components/GameHeader";
import Instructions from "./components/Instructions";
import ScoreAlert from "./components/ScoreAlert";
import Score from "./components/Score";
import ImageCard from "./components/ImageCard";
import Footer from "./components/Footer";
import cats from "./cats.js";
import logo from "./images/logo.svg";
import "./App.css";

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
    console.log(this.state);
    return (
      <div className="App">
        <GameHeader
          correct={this.state.correct}
          totalGuesses={this.state.totalGuesses}
          wasCorrect={this.state.wasCorrect}
          hasClicked={this.state.hasClicked}
          resetGame={this.state.resetGame}
          winOrLose={this.state.winOrLose}
        />
        <Instructions />
        {this.state.cats.map((cat, count) => (
          <ImageCard
            key={cat.id}
            id={cat.id}
            image={cat.image}
            onClick={() => this.allTheThings(cat.id)}
          />
        ))}

        <Score />
        <Footer />
      </div>
    );
  }
}

export default App;
