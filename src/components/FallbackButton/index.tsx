import React from 'react';
import * as Styled from './index.styled';
import { useNavigate } from 'react-router-dom';

const FallbackButton = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return (
    <Styled.Container type="button" onClick={onClick}>
      <Styled.Arrow />
    </Styled.Container>
  );
};

export default FallbackButton;
