import React, { useContext } from 'react';

import { Form, useNavigate } from 'react-router-dom';
import { CardNumber } from '../cardNumber/CardNumber';
import ExpirationDate from '../expirationDate/ExpirationDate';
import OwnerNameInput from '../ownerNameInput/OwnerName';
import SecurityCode from '../securityCode/SecurityCode';
import CardPassword from '../cardPassword/CardPassword';
import { CreditCardContext } from '../../../contexts/CreditCardContext';
import CreditCardContextType from '../../../@types/creditCardContextType';
import {
  VALID_CARD_NUMBER_REGEX,
  VALID_EXPIRATION_MONTH_REGEX,
  VALID_EXPIRATION_YEAR_REGEX,
  VALID_PASSWORD_REGEX,
  VALID_SECURITY_CODE_REGEX,
} from '../../../utils/regexp';
import { StyledMessage } from '../../pages/SuccessPage.style';
import styled, { keyframes } from 'styled-components';
import Button from '../../common/button/Button.style';

interface CardRegisterFormProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function CardRegisterForm({ isLoading, setIsLoading }: CardRegisterFormProps) {
  const navigation = useNavigate();

  const { creditCard } = useContext(CreditCardContext) as CreditCardContextType;
  const { cardNumber, securityCode, password, expirationDate } = creditCard;

  const hasShowButton =
    VALID_CARD_NUMBER_REGEX.test(cardNumber.join('')) &&
    VALID_EXPIRATION_MONTH_REGEX.test(expirationDate[0]) &&
    VALID_EXPIRATION_YEAR_REGEX.test(expirationDate[1]) &&
    VALID_SECURITY_CODE_REGEX.test(securityCode) &&
    VALID_PASSWORD_REGEX.test(password.join(''));

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigation('/register-success');
    }, 3000);
  };

  return (
    <>
      {!isLoading ? (
        <Form onSubmit={handleSubmit}>
          <CardNumber />
          <ExpirationDate />
          <OwnerNameInput />
          <SecurityCode />
          <CardPassword />

          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <Button $primary={true} width="auto" size="large" disabled={!hasShowButton}>
              다음
            </Button>
          </div>
        </Form>
      ) : (
        <StyledRegisterMessage>카드를 등록중입니다.</StyledRegisterMessage>
      )}
    </>
  );
}

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
const StyledRegisterMessage = styled(StyledMessage)`
  animation: ${fadeOut} 2s linear forwards;
`;

export default CardRegisterForm;
