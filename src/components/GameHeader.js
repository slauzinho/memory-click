import React from "react";
import styled from "styled-components";
import Score from "./Score";
import ScoreAlert from "./ScoreAlert";

const Header = styled.header`
  height: 70px;
  width: 100%;
  opacity: 0.9;
  background-color: #420742;
  font-size: 35px;
  color: white;
  box-shadow: 10px 10px 5px grey;
`;

const GameTitle = styled.button`
  font-size: 38px;
  border: none;
  color: white;
  cursor: pointer;
  background-color: #420742;
  float: left;
  margin-top: 17px;

  :hover {
    background-color: #5f205f;
  }
`;

const GameHeader = ({ correct, totalGuesses, wasCorrect, hasClicked }) => {
  return (
    <Header>
      <GameTitle>Clicky Game</GameTitle>
      <Score correct={correct} totalGuesses={totalGuesses} />
      <ScoreAlert wasCorrect={wasCorrect} hasClicked={hasClicked} />
    </Header>
  );
};

export default GameHeader;
