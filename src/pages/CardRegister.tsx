import { useState } from 'react';
import { css } from '@emotion/react';
import { InformationDetailType, InputChangePropsType } from '../types/card';
import { CardNumberType, CardOwnerType, CardPeriodType } from '../types/state';
import useCompleted from '../hooks/useCompleted';
import { PERIOD } from '../constants/inputInformation';
import validateInput from '../validations/validateInput';
import CardFrontImage from '../components/CardFrontImage';
import InputGroup from '../components/InputGroup';
import { useNavigate } from 'react-router-dom';
import CardBackImage from '../components/CardBackImage';

const appContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  padding: '31px',
  gap: '45px',
});

const appInputStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
});

const buttonStyle = css({
  backgroundColor: '#333333',
  width: '100%',
  fontWeight: 'bold',
  position: 'absolute',
  bottom: 0,
  left: 0,
  minHeight: '5%',
  fontSize: '16px',
  color: '#F3F3F3',
  padding: '30px auto',
});

interface HandleCardErrorType {
  isError: boolean;
  inputSection: InformationDetailType;
  message: string;
  index: number;
}

function CardRegister() {
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState<CardNumberType>({
    data: ['', '', '', ''],
    errorMessage: '',
  });
  const [cardPeriod, setCardPeriod] = useState<CardPeriodType>({
    data: { month: '', year: '' },
    errorMessage: '',
  });
  const [cardOwner, setCardOwner] = useState<CardOwnerType>({ data: '', errorMessage: '' });
  const [cardProvider, setCardProvider] = useState<CardOwnerType>({ data: '', errorMessage: '' });
  const [cardCvc, setCardCvc] = useState<CardOwnerType>({ data: '', errorMessage: '' });
  const [cardPassword, setCardPassword] = useState<CardOwnerType>({ data: '', errorMessage: '' });

  const [inputError, setInputError] = useState({
    number: [true, true, true, true],
    month: true,
    year: true,
    owner: true,
    provider: true,
    cvc: true,
    password: true,
  });

  const isCompleted = useCompleted(inputError);

  const handleCardNumber = (value: string, index: number) => {
    setCardNumber((prevState) => {
      const { data } = prevState;
      const updatedState = [...data];
      updatedState[index] = value;
      return { ...prevState, data: updatedState };
    });
  };

  const handleCardPeriod = (value: string, index: number) => {
    setCardPeriod((prevState) => {
      const { data } = prevState;
      const updatedState = { ...data };
      updatedState[PERIOD[index]] = value;
      return { ...prevState, data: updatedState };
    });
  };

  const handleCardOwner = (value: string) => {
    setCardOwner((prevState) => {
      return { ...prevState, data: value };
    });
  };

  const handleCardProvider = (value: string) => {
    setCardProvider((prevState) => {
      return { ...prevState, data: value };
    });
  };

  const handleCardCvc = (value: string) => {
    setCardCvc((prevState) => {
      return { ...prevState, data: value };
    });
  };

  const handleCardPassword = (value: string) => {
    setCardPassword((prevState) => {
      return { ...prevState, data: value };
    });
  };

  const setStateFunctions = {
    number: handleCardNumber,
    month: handleCardPeriod,
    year: handleCardPeriod,
    owner: handleCardOwner,
    provider: handleCardProvider,
    cvc: handleCardCvc,
    password: handleCardPassword,
  };

  const handleCardInput = ({ value, index, inputSection }: InputChangePropsType) => {
    if (!inputSection) return;
    const setStateFunction = setStateFunctions[inputSection];
    setStateFunction(value, index);
  };

  const setErrorFunctions = {
    number: setCardNumber,
    month: setCardPeriod,
    year: setCardPeriod,
    owner: setCardOwner,
    provider: setCardProvider,
    cvc: setCardCvc,
    password: setCardPassword,
  };

  const handleCardError = ({ isError, inputSection, message, index }: HandleCardErrorType) => {
    setInputError((prevState) => {
      if (inputSection === 'number') {
        const updatedState = [...prevState.number];
        updatedState[index] = isError;
        return { ...prevState, number: updatedState };
      }
      prevState[inputSection] = isError;
      return { ...prevState, [inputSection]: isError };
    });

    const setErrorFunction = setErrorFunctions[inputSection];
    setErrorFunction((prevState: any) => {
      return { ...prevState, errorMessage: message };
    });
  };

  const handleInputChange = ({ value, index, inputSection }: InputChangePropsType) => {
    if (!inputSection) return;

    const { isError, message } = validateInput(value, inputSection);
    handleCardInput({ value, index, inputSection });
    handleCardError({ isError, inputSection, message, index });
  };

  const handlePage = () => {
    navigate('/completed', {
      state: {
        cardStartNumber: cardNumber.data[0],
        cardProvider: cardProvider.data,
      },
    });
  };

  const [ownerOnBlur, setOwnerOnBlur] = useState(false);
  const [cvcOnBlur, setCvcOnBlur] = useState(false);
  const [cvcOnFocus, setCvcOnFocus] = useState(false);

  const handleCvcOnBlur = () => {
    setCvcOnBlur(true);
  };

  const handleOwnerOnBlur = () => {
    setOwnerOnBlur(true);
    setCvcOnFocus(false);
  };

  const handleCvcOnFocus = () => {
    setCvcOnFocus(true);
  };

  return (
    <div css={appContainerStyle}>
      {!inputError.owner && !cvcOnBlur && cvcOnFocus ? (
        <CardBackImage cardCvc={cardCvc.data} />
      ) : (
        <CardFrontImage
          cardNumber={cardNumber.data}
          cardPeriod={cardPeriod.data}
          cardOwner={cardOwner.data}
          cardProvider={cardProvider.data}
        />
      )}
      <form css={appInputStyle}>
        {/* 비밀번호 */}
        {!inputError.cvc && cvcOnBlur && (
          <InputGroup
            onInputChange={({ value, index }: InputChangePropsType) =>
              handleInputChange({ value, index, inputSection: 'password' })
            }
            informationSection="password"
            isError={[inputError.password]}
            errorMessage={cardPassword.errorMessage}
          />
        )}
        {/* CVC */}
        {!inputError.owner && ownerOnBlur && (
          <InputGroup
            onInputChange={({ value, index }: InputChangePropsType) =>
              handleInputChange({ value, index, inputSection: 'cvc' })
            }
            informationSection="cvc"
            isError={[inputError.cvc]}
            errorMessage={cardCvc.errorMessage}
            onBlur={() => handleCvcOnBlur()}
            onFocus={() => handleCvcOnFocus()}
          />
        )}
        {/* 카드 소유자 */}
        {!inputError.month && !inputError.year && (
          <InputGroup
            onInputChange={({ value, index }: InputChangePropsType) =>
              handleInputChange({ value, index, inputSection: 'owner' })
            }
            informationSection="owner"
            isError={[inputError.owner]}
            errorMessage={cardOwner.errorMessage}
            onBlur={() => handleOwnerOnBlur()}
          />
        )}
        {/* 유효기간 */}
        {!inputError.provider && (
          <InputGroup
            onInputChange={({ value, index, inputSection }: InputChangePropsType) => {
              handleInputChange({ value, index, inputSection });
            }}
            informationSection="period"
            isError={[inputError.month, inputError.year]}
            errorMessage={cardPeriod.errorMessage}
          />
        )}
        {/* 카드사 */}
        {!inputError.number.some((error: boolean) => error) && (
          <InputGroup
            onInputChange={({ value, index }: InputChangePropsType) =>
              handleInputChange({ value, index, inputSection: 'provider' })
            }
            informationSection="provider"
            isError={[inputError.provider]}
            errorMessage={cardProvider.errorMessage}
          />
        )}
        {/* 카드 번호 */}
        <InputGroup
          onInputChange={({ value, index }: InputChangePropsType) =>
            handleInputChange({ value, index, inputSection: 'number' })
          }
          informationSection="number"
          isError={inputError.number}
          errorMessage={cardNumber.errorMessage}
        />
      </form>
      {isCompleted && (
        <button css={buttonStyle} onClick={() => handlePage()}>
          확인
        </button>
      )}
    </div>
  );
}

export default CardRegister;
