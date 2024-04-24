import { useState } from 'react';
import './App.css';
import './reset.css';
import InputGroup from './components/InputGroup';
import CardImage from './components/CardImage';
import { css } from '@emotion/react';
import { InformationDetailType, InputChangePropsType } from './types/card';
import { CardNumberType, CardOwnerType, CardPeriodType } from './types/state';
import validateInput from './validations/validateInput';
import { PERIOD } from './constants/inputInformation';
import useCompleted from './hooks/useCompleted';
import InputGroupSelector from './components/InputGroupSelector';

const appContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  padding: '31px',
  gap: '45px',
  width: '376px',
});

const appStyle = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const appInputStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
});

interface HandleCardErrorType {
  isError: boolean;
  inputSection: InformationDetailType;
  message: string;
  index: number;
}

function App() {
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

  const [inputError, setInputError] = useState({
    number: [true, true, true, true],
    month: true,
    year: true,
    owner: true,
    provider: true,
  });

  // const isCompleted = useCompleted(inputError);
  // console.log(isCompleted);

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

  const setStateFunctions = {
    number: handleCardNumber,
    month: handleCardPeriod,
    year: handleCardPeriod,
    owner: handleCardOwner,
    provider: handleCardProvider,
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

  return (
    <div css={appStyle}>
      <div css={appContainerStyle}>
        <CardImage cardNumber={cardNumber.data} cardPeriod={cardPeriod.data} cardOwner={cardOwner.data} />
        <form css={appInputStyle}>
          {/* 카드 소유자 */}
          {!inputError.month && !inputError.year && (
            <InputGroup
              onInputChange={({ value, index }: InputChangePropsType) =>
                handleInputChange({ value, index, inputSection: 'owner' })
              }
              informationSection="owner"
              isError={[inputError.owner]}
              errorMessage={cardOwner.errorMessage}
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
            <InputGroupSelector
              onInputChange={({ value, index }: InputChangePropsType) =>
                handleInputChange({ value, index, inputSection: 'provider' })
              }
              informationSection="provider"
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
      </div>
    </div>
  );
}

export default App;
