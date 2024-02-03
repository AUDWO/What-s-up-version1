import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const C = () => {
  const navigate = useNavigate();
  return (
    <Bb>
      <ImageWrapper>
        <img src="https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg" />
      </ImageWrapper>
    </Bb>
  );
};

export default C;

const Bb = styled.div`
  width: 50%;
  background-color: blue;
  border: 5px solid red;
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 200%;
  overflow: hidden;
  border: 5px solid green;
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: white;

  width: 100%;
  height: 100%;
  background-color: pink;
`;

const Container = styled.div`
  display: flex;
`;

const Box0 = styled.div`
  width: 100%;
  height: 100%;

  padding-bottom: 100%;
  background-color: red;
`;

const Box1 = styled.div`
  border: 5px solid black;
  width: 20%;
  height: 20%;

  background-color: skyBlue;
`;

const Box2 = styled.div`
  border: 1px solid red;
  width: 200px;
  height: 200px;
  background-color: blue;
`;

const Box3 = styled.div`
  border: 1px solid red;
  width: 20vw;
  height: 20vh;
  background-color: pink;
`;
