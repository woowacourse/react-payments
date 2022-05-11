import React from "react";
import styled from "styled-components";

export const NewCard = () => {
  return (
    <CardBox>
      <CardSymbol>+</CardSymbol>
    </CardBox>
  );
};

const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5e5e5;

  width: 208px;
  height: 130px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  margin: 10px 0;
`;

const CardSymbol = styled.div`
  color: #575757;
  font-weight: bold;
  font-size: 36px;
`;
