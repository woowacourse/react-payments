import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as BlackDot } from '../../assets/black-dot.svg';
import { CARD_FORM_TITLE, SECURITY_CODE_HELP } from '../../constants';
import { checkCardNumber, checkExpirationDate, checkPassword, checkSecurityCode } from '../../domain/validator';
import useWrappingContext from '../../hooks/useWrappingContext';
import CardListStore from '../../store';
import getErrorMessage from '../../utils/getErrorMessage';
import PaymentsInput from '../PaymentsInput';
import QuestionToolTip from '../QuestionToolTip';
import type { CardInformation, CardNumber, CardPassword, ExpirationDate, SecurityCode } from '../Common/Card/types';

interface CardRegistrationFormProps {
  card: CardInformation;
  setCardNumber: React.Dispatch<React.SetStateAction<string[]>>;
  setExpirationDate: React.Dispatch<React.SetStateAction<string[]>>;
  setOwner: React.Dispatch<React.SetStateAction<string[]>>;
  setSecurityCode: React.Dispatch<React.SetStateAction<string[]>>;
  setPassword: React.Dispatch<React.SetStateAction<string[]>>;
}

interface ErrorMessage {
  cardNumber?: string | undefined;
  expirationDate?: string | undefined;
  owner?: string | undefined;
  securityCode?: string | undefined;
  password?: string | undefined;
}

const { NUMBER, EXPIRATION_DATE, OWNER, SECURITY_CODE, PASSWORD } = CARD_FORM_TITLE;

function CardRegistrationForm({
  card,
  setCardNumber,
  setExpirationDate,
  setOwner,
  setSecurityCode,
  setPassword,
}: CardRegistrationFormProps) {
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>({
    cardNumber: '',
    expirationDate: '',
    owner: '',
    securityCode: '',
    password: '',
  });
  const navigate = useNavigate();
  const { dispatchCardList } = useWrappingContext(CardListStore);
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { cardNumber, expirationDate, securityCode, password } = errorMessage;
    if (
      cardNumber === undefined &&
      expirationDate === undefined &&
      securityCode === undefined &&
      password === undefined
    ) {
      dispatchCardList(card);
      navigate('/');
    }
  };

  const getInputListValue =
    (dispatch: React.Dispatch<React.SetStateAction<string[]>>) => (callback: React.SetStateAction<string[]>) => {
      dispatch(callback);
    };

  const checkValidator =
    <T,>(validateCallback: (value: T) => void, value: T | undefined, name: string) =>
    () => {
      try {
        if (value) {
          validateCallback(value);
          setErrorMessage(prev => ({ ...prev, [name]: undefined }));
        }
      } catch (error) {
        setErrorMessage(prev => ({ ...prev, [name]: getErrorMessage(error) }));
      }
    };

  return (
    <StyledCardRegistrationFrom onSubmit={handleForm}>
      <PaymentsInput
        name={NUMBER}
        inputListInformation={{
          inputInformation: [
            { type: 'string', minLength: 4, maxLength: 4, textAlign: 'center', placeholder: '1234', isRequired: true },
            { type: 'string', minLength: 4, maxLength: 4, textAlign: 'center', placeholder: '1234', isRequired: true },
            {
              type: 'password',
              minLength: 4,
              maxLength: 4,
              textAlign: 'center',
              placeholder: '1234',
              isRequired: true,
            },
            {
              type: 'password',
              minLength: 4,
              maxLength: 4,
              textAlign: 'center',
              placeholder: '1234',
              isRequired: true,
              onBlur: checkValidator<CardNumber>(checkCardNumber, card.cardNumber, 'cardNumber'),
            },
          ],
          bridgeLetter: '-',
          regExp: /[^0-9]/g,
          getInputListValue: getInputListValue(setCardNumber),
        }}
        errorMessage={errorMessage?.cardNumber}
      />
      <PaymentsInput
        name={EXPIRATION_DATE}
        inputListInformation={{
          inputInformation: [
            { type: 'string', minLength: 2, maxLength: 2, textAlign: 'center', placeholder: 'MM', isRequired: true },
            {
              type: 'string',
              minLength: 2,
              maxLength: 2,
              textAlign: 'center',
              placeholder: 'YY',
              isRequired: true,
              onBlur: checkValidator<ExpirationDate>(checkExpirationDate, card.expirationDate, 'expirationDate'),
            },
          ],
          bridgeLetter: '/',
          regExp: /[^0-9]/g,
          getInputListValue: getInputListValue(setExpirationDate),
        }}
        errorMessage={errorMessage?.expirationDate}
      />
      <PaymentsInput
        name={OWNER}
        inputListInformation={{
          inputInformation: [
            { type: 'string', maxLength: 30, placeholder: '카드에 표시된 이름과 동일하게 입력하세요.' },
          ],
          regExp: /[^a-z|A-Z]/g,
          getInputListValue: getInputListValue(setOwner),
        }}
        errorMessage={errorMessage?.owner}
        showNumberOfValue
      />
      <PaymentsInput
        name={SECURITY_CODE}
        inputListInformation={{
          inputInformation: [
            {
              type: 'password',
              textAlign: 'center',
              minLength: 3,
              maxLength: 3,
              isRequired: true,
              onBlur: checkValidator<SecurityCode>(checkSecurityCode, card.securityCode, 'securityCode'),
            },
          ],
          regExp: /[^0-9]/g,
          getInputListValue: getInputListValue(setSecurityCode),
          children: <QuestionToolTip questionMessage={SECURITY_CODE_HELP} />,
        }}
        errorMessage={errorMessage?.securityCode}
      />
      <PaymentsInput
        name={PASSWORD}
        inputListInformation={{
          inputInformation: [
            { type: 'password', textAlign: 'center', minLength: 1, maxLength: 1, isRequired: true },
            {
              type: 'password',
              textAlign: 'center',
              minLength: 1,
              maxLength: 1,
              onBlur: checkValidator<CardPassword>(checkPassword, card.password, 'password'),
              isRequired: true,
            },
          ],
          bridgeLetter: '',
          regExp: /[^0-9]/g,
          getInputListValue: getInputListValue(setPassword),
          children: (
            <>
              <div>
                <BlackDot />
              </div>
              <div>
                <BlackDot />
              </div>
            </>
          ),
        }}
        errorMessage={errorMessage?.password}
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
`;

export default CardRegistrationForm;
