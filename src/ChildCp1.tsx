import React from "react";
import styled from "styled-components";

const ChildCp1 = ({ display }: { display: boolean }) => {
  console.log("Child Component");
  return (
    <ChiledCpContainer display={display}>
      <div> 안녕</div>;
    </ChiledCpContainer>
  );
};

export default ChildCp1;

const ChiledCpContainer = styled.div<{ display: boolean }>`
  display: ${(props) => (props.display ? "block" : "none")};
  width: 300px;
  height: 300px;
  background-color: pink;
`;
