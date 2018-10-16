import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: none;
  border-radius: 30px;
  height: 225px;
  margin: 1rem;
  position: relative;
  width: 225px;
  box-shadow: 0 3px 6px #999, 0 3px 6px #999;
  text-align: left;
  float: right;
  margin-right: 20px;
  text-align: center;
  cursor: pointer;

  :hover {
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
  }

  :hover,
  :focus,
  :active {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  text-align: center;
  overflow: hidden;
  border-radius: 30px;
`;

const ImageCard = props => {
  return (
      <Card onClick={props.onClick}>
        <Image alt={props.id} src={props.image} />
      </Card>
  );
};

export default ImageCard;
