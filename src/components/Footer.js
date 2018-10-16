import React from "react";
import styled from "styled-components";
import Score from "./Score.js";

const BottomFooter = styled.div`
  width: 100%;
  height: 80px;
  background-color: #420742;
  margin-top: 70px;
  position: absolute;
`;

const FooterText = styled.p`
  color: grey;
  float: left;
  font-size: 20px;
  font-family: Roboto;
`;

const Footer = (props, correct, totalGuesses) => {
  return (
    <BottomFooter>
      <FooterText>Copyright 2018 Kayla McFadden</FooterText>
      <Score correct={this.correct} totalGuesses={this.totalGuesses} />
    </BottomFooter>
  );
};

export default Footer;
