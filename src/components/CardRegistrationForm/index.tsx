import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { checkCardNumber, checkExpirationDate, checkPassword, checkSecurityCode } from '../../domain/validator';
import useWrappingContext from '../../hooks/useWrappingContext';
import CardListStore from '../../store';
import CardNumberInput from './CardNumberInput';
import CardPasswordInput from './CardPasswordInput';
import ExpirationDateInput from './ExpirationDateInput';
import OwnerInput from './OwnerInput';
import SecurityCodeInput from './SecurityCodeInput';
import type { ErrorMessage, Visited } from './types';
import type { CardInformation, CardNumber, CardPassword, ExpirationDate, SecurityCode } from '../Common/Card/types';

interface CardRegistrationFormProps {
  card: CardInformation;
  checkValidator: <T>(validateCallback: (value: T) => void, value: T | undefined, name: string) => string;
  errorMessage: ErrorMessage;
  isVisited: Visited;
  setCardNumber: React.Dispatch<React.SetStateAction<string[]>>;
  setExpirationDate: React.Dispatch<React.SetStateAction<string[]>>;
  setOwner: React.Dispatch<React.SetStateAction<string[]>>;
  setSecurityCode: React.Dispatch<React.SetStateAction<string[]>>;
  setPassword: React.Dispatch<React.SetStateAction<string[]>>;
}

function CardRegistrationForm({
  card,
  checkValidator,
  errorMessage,
  isVisited,
  setCardNumber,
  setExpirationDate,
  setOwner,
  setSecurityCode,
  setPassword,
}: CardRegistrationFormProps) {
  const navigate = useNavigate();
  const { dispatchCardList } = useWrappingContext(CardListStore);
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const error = [
      checkValidator<CardNumber>(checkCardNumber, card.cardNumber, 'cardNumber'),
      checkValidator<ExpirationDate>(checkExpirationDate, card.expirationDate, 'expirationDate'),
      checkValidator<SecurityCode>(checkSecurityCode, card.securityCode, 'securityCode'),
      checkValidator<CardPassword>(checkPassword, card.password, 'password'),
    ];

    if (error.join('') === '') {
      dispatchCardList(card);
      navigate('/');
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
      <StyledNextButton type="submit">다음</StyledNextButton>
    </StyledCardRegistrationFrom>
  );
}

const StyledCardRegistrationFrom = styled.form`
  width: 318px;
  & > * {
    margin-bottom: 20px;
  }
  & > *:nth-child(2) {
    width: 138px;
  }
  & > *:nth-child(4) {
    width: 86px;
  }
`;

const StyledNextButton = styled.button`
  margin-top: 8px;
  background: none;
  border: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  float: right;
  cursor: pointer;
`;

export default CardRegistrationForm;
