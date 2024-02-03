import React from "react";
import styled from "styled-components";

const D = () => {
  return (
    <div>
      <Box1></Box1>
      <Box2></Box2>
    </div>
  );
};

export default D;

const Box1 = styled.div`
  width: 100%;
  height: 200px;
  background-color: orange;
  border: 5px solid red;
`;

const Box2 = styled.div`
  width: 100vw;
  height: 200px;
  background-color: black;
  border: 5px solid red;
`;
