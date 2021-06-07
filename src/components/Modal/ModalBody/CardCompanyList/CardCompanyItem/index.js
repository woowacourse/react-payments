import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const CardCompanyItem = ({ name, color, isSelected, ...props }) => {
  return (
    <Styled.Container {...props}>
      <Styled.ColorContainer color={color}>
        <Styled.CompanyColor color={color} isSelected={isSelected} />
      </Styled.ColorContainer>
      <Styled.CompanyName isSelected={isSelected}>{`${name} 카드`}</Styled.CompanyName>
    </Styled.Container>
  );
};

CardCompanyItem.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  isSelected: PropTypes.bool,
};
