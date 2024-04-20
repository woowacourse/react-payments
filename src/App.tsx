import { useState } from 'react';
import './App.css';
import './reset.css';
import InputGroup from './components/InputGroup';
import CardImage from './components/CardImage';
import { css } from '@emotion/react';
import { informationSectionType } from './types/card';

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

interface HandleCardInputType {
  value: string;
  index: number;
  inputSection: informationSectionType;
}

function App() {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [cardPeriod, setCardPeriod] = useState(['', '']);
  const [cardOwner, setCardOwner] = useState(['']);

  const setStateFunctions: { [key: string]: React.Dispatch<React.SetStateAction<string[]>> } = {
    number: setCardNumber,
    period: setCardPeriod,
    owner: setCardOwner,
  };

  const handleCardInput = ({ value, index, inputSection }: HandleCardInputType) => {
    const setStateFunction = setStateFunctions[inputSection];

    setStateFunction((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = value;
      return updatedState;
    });
  };

  return (
    <div css={appStyle}>
      <div css={appContainerStyle}>
        <CardImage cardNumber={cardNumber} cardPeriod={cardPeriod} cardOwner={cardOwner} />
        <form css={appInputStyle}>
          <InputGroup
            setState={(value: string, index: number) => handleCardInput({ value, index, inputSection: 'number' })}
            informationSection="number"
          />
          <InputGroup
            setState={(value: string, index: number) => handleCardInput({ value, index, inputSection: 'period' })}
            informationSection="period"
          />
          <InputGroup
            setState={(value: string, index: number) => handleCardInput({ value, index, inputSection: 'owner' })}
            informationSection="owner"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
