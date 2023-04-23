import React from 'react';
import styled from 'styled-components';
import Button from '../../atomics/Button';
import Message from '../../atomics/Message';

/* component */
const CardRegister: React.FC = () => {
  return (
    <StyledCardRegisterWrapper>
      <Message fontSize="14px" lineHeight="16px" fontWeight={700} color="#575757" opacity={0.9}>
        새로운 카드를 등록해주세요
      </Message>
      <Button type="button" kind="register">
        +
      </Button>
    </StyledCardRegisterWrapper>
  );
};

/* styles */
const StyledCardRegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #575757;

  span + button {
    margin-top: 8px;
  }
`;

export default CardRegister;
