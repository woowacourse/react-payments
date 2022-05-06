import React from 'react';
import styled from 'styled-components';

const CardNickNameInputWrapper = styled.input`
  width: 250px;
  border-style: none;
  border-bottom: 1px solid #111;
  text-align: center;

  font-size: 18px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const CardNickNameInput = ({ onChange }) => {
  return <CardNickNameInputWrapper onChange={onChange} data-testid="card-nickname" />;
};

export default CardNickNameInput;
