import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Selector from "./Selector";

const Palette = ({ onClickCardSelector }) => {
  return (
    <Container>
      <SelectorContainer>
        <Selector
          color="red"
          name="포코 카드"
          onClick={onClickCardSelector("red")}
        />
        <Selector
          color="blue"
          name="도리 카드"
          onClick={onClickCardSelector("blue")}
        />
        <Selector
          color="green"
          name="호프 카드"
          onClick={onClickCardSelector("green")}
        />
        <Selector
          color="purple"
          name="공원 카드"
          onClick={onClickCardSelector("purple")}
        />
      </SelectorContainer>
      <SelectorContainer>
        <Selector
          color="mint"
          name="콜라 카드"
          onClick={onClickCardSelector("mint")}
        />
        <Selector
          color="pink"
          name="블링 카드"
          onClick={onClickCardSelector("pink")}
        />
        <Selector
          color="orange"
          name="태태 카드"
          onClick={onClickCardSelector("orange")}
        />
        <Selector
          color="yellow"
          name="샐리 카드"
          onClick={onClickCardSelector("yellow")}
        />
      </SelectorContainer>
    </Container>
  );
};

Palette.propTypes = {
  onClickCardSelector: PropTypes.func,
};

const Container = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  border: none;
  padding: 26px 0;
  gap: 20px;
  background-color: #fff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  z-index: 10;
`;

const SelectorContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  & > div {
    margin: 0 16px;
  }
`;

export default Palette;
