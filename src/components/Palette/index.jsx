import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Selector from 'components/Palette/Selector';
import { cardInfoList } from 'constant';

const Container = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  align-items: center;
  border: none;
  padding: 26px 0;
  gap: 20px;
  background-color: #fff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  visibility: hidden;
  transform: translateY(180px);
  transition: transform 300ms ease-in-out;

  z-index: 10;

  &.is-active {
    visibility: visible;
    transform: translateY(60px);
  }
`;

const SelectorContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: center;
  align-items: center;
  & > div {
    margin: 0 16px;
  }
`;

const Palette = ({ onClickCardSelector, isModalOpened }) => {
  return (
    <Container className={isModalOpened ? 'is-active' : ''}>
      <SelectorContainer>
        {cardInfoList
          .filter((_, index) => index < 4)
          .map((card) => (
            <Selector
              key={card.id}
              color={card.color}
              name={card.name}
              onClick={onClickCardSelector({ name: card.name, color: card.color })}
            />
          ))}
      </SelectorContainer>
      <SelectorContainer>
        {cardInfoList
          .filter((_, index) => index >= 4)
          .map((card) => (
            <Selector
              key={card.id}
              color={card.color}
              name={card.name}
              onClick={onClickCardSelector({ color: card.color, name: card.name })}
            />
          ))}
      </SelectorContainer>
    </Container>
  );
};

Palette.propTypes = {
  onClickCardSelector: PropTypes.func,
};

export default Palette;
