import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCardInformationStore } from '../../context/CardInformationProvider';
import { checkCardNumber, checkExpirationDate, checkPassword, checkSecurityCode } from '../../domain/validator';
import TransParentButton from '../Common/Button/TransParentButton';
import CardNumberInput from './CardNumberInput';
import CardPasswordInput from './CardPasswordInput';
import ExpirationDateInput from './ExpirationDateInput';
import OwnerInput from './OwnerInput';
import SecurityCodeInput from './SecurityCodeInput';
import type { CardNumber, CardPassword, ExpirationDate, SecurityCode } from '../Common/Card/types';

function CardRegistrationForm() {
  const {
    card,
    checkValidator,
    errorMessage,
    isVisited,
    setCardNumber,
    setExpirationDate,
    setOwner,
    setPassword,
    setSecurityCode,
    resetValidateForm,
  } = useCardInformationStore();
  const navigate = useNavigate();
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const error = [
      checkValidator<CardNumber>(checkCardNumber, card.cardNumber, 'cardNumber'),
      checkValidator<ExpirationDate>(checkExpirationDate, card.expirationDate, 'expirationDate'),
      checkValidator<SecurityCode>(checkSecurityCode, card.securityCode, 'securityCode'),
      checkValidator<CardPassword>(checkPassword, card.password, 'password'),
    ];

    if (error.join('') === '') {
      resetValidateForm();
      navigate('/registration/complete');
    }
  };

  return (
    <StyledCardRegistrationFrom onSubmit={handleForm}>
      <CardNumberInput
        getInputListValue={setCardNumber}
        checkValidator={() => checkValidator<CardNumber>(checkCardNumber, card.cardNumber, 'cardNumber')}
        errorMessage={errorMessage.cardNumber}
        isVisited={isVisited.cardNumber}
      />
      <ExpirationDateInput
        getInputListValue={setExpirationDate}
        checkValidator={() =>
          checkValidator<ExpirationDate>(checkExpirationDate, card.expirationDate, 'expirationDate')
        }
        errorMessage={errorMessage.expirationDate}
        isVisited={isVisited.expirationDate}
      />
      <OwnerInput getInputListValue={setOwner} errorMessage={errorMessage.owner} isVisited={isVisited.owner} />
      <SecurityCodeInput
        getInputListValue={setSecurityCode}
        checkValidator={() => checkValidator<SecurityCode>(checkSecurityCode, card.securityCode, 'securityCode')}
        errorMessage={errorMessage.securityCode}
        isVisited={isVisited.securityCode}
      />
      <CardPasswordInput
        getInputListValue={setPassword}
        checkValidator={() => checkValidator<CardPassword>(checkPassword, card.password, 'password')}
        errorMessage={errorMessage.password}
        isVisited={isVisited.password}
      />
      <TransParentButton type="submit">다음</TransParentButton>
    </StyledCardRegistrationFrom>
  );
}

const StyledCardRegistrationFrom = styled.form`
  width: 318px;
  & > * {
    margin-bottom: 10px;
  }
  & > *:nth-child(2) {
    width: 138px;
  }
  & > *:nth-child(4) {
    width: 146px;
  }
  & > button {
    margin-top: 8px;
    background: none;
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    float: right;
  }
`;

export default CardRegistrationForm;
