import React from "react";
import styled from "styled-components";

const GameScore = styled.p`
  color: white;
  font-size: 18px;
  font-family: Roboto;
  float: right;
  padding: 14px;
`;

const Score = ({ correct, totalGuesses }) => {
  return (
    <GameScore>
      Guesses Correct: {correct} | Total Guesses:{totalGuesses}
    </GameScore>
  );
};

export default Score;
