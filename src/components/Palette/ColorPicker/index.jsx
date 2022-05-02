import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './index.styled';

const ColorPicker = ({ color, name, onClick }) => {
  return (
    <styled.Container onClick={onClick}>
      <styled.OptionContainer color={color} />
      <styled.DescriptionContainer>{name}</styled.DescriptionContainer>
    </styled.Container>
  );
};

ColorPicker.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default ColorPicker;
