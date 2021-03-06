import React from "react";
import styled from "styled-components";
import image from "../images/swirl_pattern.png";

const InstructionsBackground = styled.div`
  width: 100%;
  color: ${props => props.theme.primary};
  text-align: center;

  &::after {
    content: "";
    background: url(${image});
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

const GameTitle = styled.h1`
  font-size: 90px;
  padding: 30px;
  margin: 0;
`;

const InstructionsText = styled.p`
  margin-top: 29px;
  font-size: 20px;
  color: ${props => props.theme.secondary};
`;
const Instructions = props => {
  return (
    <InstructionsBackground>
      <GameTitle>Clicky Game!</GameTitle>
      <InstructionsText>
        Click on an image to earn points, but don't click on them more than
        once...or else.
      </InstructionsText>
    </InstructionsBackground>
  );
};

export default Instructions;
