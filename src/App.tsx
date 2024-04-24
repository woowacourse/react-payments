import './App.css';

import CardForm from './components/CardForm';
import CardInfoProps from './props/useInput/CardInfo';
import CardPreview from './components/CardPreview';
import { matchCardIssuer } from './domain/matchCardIssuer';
import styled from '@emotion/styled';
import useValidateInput from './hooks/useValidateInput';

function App() {
  const firstCardNumberValidateInput = useValidateInput(
    CardInfoProps.cardNumberPart
  );
  const secondCardNumberValidateInput = useValidateInput(
    CardInfoProps.cardNumberPart
  );
  const thirdCardNumberValidateInput = useValidateInput(
    CardInfoProps.cardNumberPart
  );
  const fourthCardNumberValidateInput = useValidateInput(
    CardInfoProps.cardNumberPart
  );

  const expiredDateMonthValidateInput = useValidateInput(
    CardInfoProps.expiredDate.month
  );
  const expiredDateYearValidateInput = useValidateInput(
    CardInfoProps.expiredDate.year
  );

  const cardHolderValidateInput = useValidateInput(CardInfoProps.cardHolder);

  const cardNumberInputs = [
    firstCardNumberValidateInput,
    secondCardNumberValidateInput,
    thirdCardNumberValidateInput,
    fourthCardNumberValidateInput,
  ];

  const cardNumbers = cardNumberInputs.map(
    validateInput => validateInput.inputValue
  ) as [string, string, string, string];
  const cardIssuer = matchCardIssuer(cardNumbers.join(''));

  const cardInfo = {
    cardNumbers,
    cardIssuer,
    expiredDate: [
      expiredDateMonthValidateInput.inputValue,
      expiredDateYearValidateInput.inputValue,
    ] as [string, string],
    cardHolder: cardHolderValidateInput.inputValue,
  };

  return (
    <Payments>
      <CardPreview cardInfo={cardInfo} />
      <CardForm
        cardNumberValidateInputs={cardNumberInputs}
        expiredDateMonthValidateInput={expiredDateMonthValidateInput}
        expiredDateYearValidateInput={expiredDateYearValidateInput}
        cardHolderValidateInput={cardHolderValidateInput}
      />
    </Payments>
  );
}

export default App;

const Payments = styled.section({
  width: '315px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '30px',

  margin: 'auto',
  marginTop: '30px',
  padding: '100px',
  backgroundColor: 'white',
});
