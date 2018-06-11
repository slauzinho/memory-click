import React from "react";
import styled from "styled-components";

const Message = styled.p`
color: white;
font-size; 40px;
font-family; Roboto;
margin: auto;
padding: 25px 0px 0px 300px;
font-size: 25px;
`;

const ScoreAlert = ({ wasCorrect, hasClicked, winOrLose, resetGame }) => {
  return (
    <Message>
      {hasClicked
        ? wasCorrect
          ? "You guessed correctly!"
          : "You guessed incorrectly!"
        : ""}
      {resetGame ? alert(winOrLose) : ""}
    </Message>
  );
};

export default ScoreAlert;
