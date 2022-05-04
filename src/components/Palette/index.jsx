import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Selector from './Selector';
import { cardInfoList } from '../../constant';

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

const Palette = ({ onClickCardSelector }) => {
  return (
    <Container>
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
  onClickCardSelector: PropTypes.func.isRequired,
};

export default Palette;
