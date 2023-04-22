import React from 'react';
import styled from 'styled-components';
import CardCVC from '../../molecules/CardCVC';
import CardExpiration from '../../molecules/CardExpiration';
import CardNumbers from '../../molecules/CardNumbers';
import CardOwner from '../../molecules/CardOwner';
import CardPWD from '../../molecules/CardPWD';

/* component */
const CardForm: React.FC = () => {
  return (
    <StyledForm>
      <CardNumbers />
      <CardExpiration />
      <CardOwner />
      <CardCVC />
      <CardPWD />
    </StyledForm>
  );
};

/* styles */
const StyledForm = styled.form``;

export default CardForm;
