import React from "react";
import styled from "styled-components";
import { ColorType } from "../../constant";

const Selector = ({ color, name, onClick }) => {
  return (
    <Container onClick={onClick}>
      <OptionContainer color={color} />
      <DescriptionContainer>{name}</DescriptionContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  cursor: pointer;
`;

const OptionContainer = styled.div`
  background-color: ${(props) => ColorType[props.color]};
  width: 37px;
  height: 37px;
  border-radius: 50%;
`;

const DescriptionContainer = styled.span`
  margin-top: 10px;
  font-size: 12px;
`;

export default Selector;
