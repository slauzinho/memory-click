import React from "react";
import styled from "styled-components";

const BottomFooter = styled.div`
  width: 100%;
  height: 80px;
  background-color: #420742;
  margin-top: 800px;
`;

const FooterText = styled.p`
  color: grey;
  float: left;
  font-size: 20px;
  font-family: Roboto;
`;

const Footer = props => {
  return (
    <BottomFooter>
      <FooterText>Copyright 2018 Kayla McFadden</FooterText>
    </BottomFooter>
  );
};

export default Footer;
