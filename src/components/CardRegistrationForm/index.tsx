import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as BlackDot } from '../../assets/black-dot.svg';
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
        name="카드 번호"
        inputListInformation={{
          inputInformation: [
            { type: 'string', maxLength: 4, textAlign: 'center', placeholder: '1234' },
            { type: 'string', maxLength: 4, textAlign: 'center', placeholder: '1234' },
            { type: 'password', maxLength: 4, textAlign: 'center', placeholder: '1234' },
            {
              type: 'password',
              maxLength: 4,
              textAlign: 'center',
              placeholder: '1234',
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
        name="만료일"
        inputListInformation={{
          inputInformation: [
            { type: 'string', maxLength: 2, textAlign: 'center', placeholder: 'MM' },
            {
              type: 'string',
              maxLength: 2,
              textAlign: 'center',
              placeholder: 'YY',
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
        name="카드 소유자 이름 (선택)"
        inputListInformation={{
          inputInformation: [
            { type: 'string', maxLength: 30, placeholder: '카드에 표시된 이름과 동일하게 입력하세요.' },
          ],
          regExp: /[^a-z|A-Z]/g,
          getInputListValue: getInputListValue(setOwner),
        }}
        errorMessage={errorMessage?.owner}
      />
      <PaymentsInput
        name="보안 코드(CVC/CVV)"
        inputListInformation={{
          inputInformation: [
            {
              type: 'password',
              textAlign: 'center',
              maxLength: 3,
              onBlur: checkValidator<SecurityCode>(checkSecurityCode, card.securityCode, 'securityCode'),
            },
          ],
          regExp: /[^0-9]/g,
          getInputListValue: getInputListValue(setSecurityCode),
          children: (
            <QuestionToolTip questionMessage="CVV/CVC 번호는 카드 뒷 면에 있는 3자리 숫자이며 카드 보안을 위한 번호입니다." />
          ),
        }}
        errorMessage={errorMessage?.securityCode}
      />
      <PaymentsInput
        name="카드 비밀번호"
        inputListInformation={{
          inputInformation: [
            { type: 'password', textAlign: 'center', maxLength: 1 },
            {
              type: 'password',
              textAlign: 'center',
              maxLength: 1,
              onBlur: checkValidator<CardPassword>(checkPassword, card.password, 'password'),
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
