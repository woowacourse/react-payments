import { css } from '@emotion/react';
import CardImage from '../components/cardInformationInput/CardImage';
import CardNumberInput from '../components/cardInformationInput/CardNumberInput';
import useInput from '../store/useInput';
import CardOwnerInput from '../components/cardInformationInput/CardOwnerInput';
import CardPeriodInput from '../components/cardInformationInput/CardPeriodInput';

function CardInformationInputPage() {
  const {
    valueInit: cardNumber,
    handleOnChange: setCardNumber,
    error: numberError,
    handleError: numberHandleError,
  } = useInput({
    values: { number_1: '', number_2: '', number_3: '', number_4: '' },
    errorMessages: { number_1: '', number_2: '', number_3: '', number_4: '' },
  });

  const {
    valueInit: cardPeriod,
    handleOnChange: setCardPeriod,
    error: periodError,
    handleError: periodHandleError,
  } = useInput({ values: { month: '', year: '' }, errorMessages: { month: '', year: '' } });

  const {
    valueInit: cardOwner,
    handleOnChange: setCardOwner,
    error: ownerError,
    handleError: ownerHandleError,
  } = useInput({ values: { owner: '' }, errorMessages: { owner: '' } });

  return (
    <div css={appStyle}>
      <div css={appContainerStyle}>
        <CardImage cardNumber={cardNumber} cardPeriod={cardPeriod} cardOwner={cardOwner} />
        <form css={appInputStyle}>
          <CardNumberInput
            setValue={setCardNumber}
            error={numberError}
            handleError={numberHandleError}
          ></CardNumberInput>
          <CardPeriodInput
            setValue={setCardPeriod}
            error={periodError}
            handleError={periodHandleError}
          ></CardPeriodInput>
          <CardOwnerInput setValue={setCardOwner} error={ownerError} handleError={ownerHandleError}></CardOwnerInput>
        </form>
      </div>
    </div>
  );
}

const appContainerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 31px;
  gap: 45px;
  width: 376px;
`;

const appStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const appInputStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export default CardInformationInputPage;
