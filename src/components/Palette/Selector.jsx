import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ColorType } from '../../constant';

const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  cursor: pointer;
`;

const OptionWrapper = styled.div`
  background-color: ${props => ColorType[props.color]};
  width: 37px;
  height: 37px;
  border-radius: 50%;
`;

const DescriptionWrapper = styled.span`
  margin-top: 10px;
  font-size: 12px;
`;

const Selector = ({ color, name, onClick }) => {
  return (
    <SelectorWrapper onClick={onClick}>
      <OptionWrapper color={color} />
      <DescriptionWrapper>{name}</DescriptionWrapper>
    </SelectorWrapper>
  );
};

Selector.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default Selector;
