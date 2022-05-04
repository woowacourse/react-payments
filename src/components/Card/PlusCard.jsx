import React from 'react';
import styled from 'styled-components';

const PlusCardWrapper = styled.button`
  width: 208px;
  height: 130px;
  text-align: center;
  font-size: 30px;
  border-style: none;
  border-radius: 4px;
  &:hover {
    border: 2px solid #94dacd;
    color: #94dacd;
  }
`;

const PlusCard = () => {
  return <PlusCardWrapper>+</PlusCardWrapper>;
};

export default PlusCard;
