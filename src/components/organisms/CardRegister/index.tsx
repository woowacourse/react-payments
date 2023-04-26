import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import Button from '../../atomics/Button';
import Message from '../../atomics/Message';

/* component */
const CardRegister: React.FC = () => {
  const navigate = useNavigate();

  const goAddCardPage = () => {
    navigate('/addCard');
  };

  return (
    <StyledCardRegisterWrapper>
      <Message fontSize="14px" lineHeight="16px" fontWeight={700} color="#575757" opacity={0.9}>
        새로운 카드를 등록해주세요
      </Message>
      <Button
        type="button"
        width="212px"
        height="124px"
        bgColor="#e5e5e5"
        borderRadius="5px"
        onClick={goAddCardPage}
      >
        <Message fontSize="30px" color="#575757">
          +
        </Message>
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
