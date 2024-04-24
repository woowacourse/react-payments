import './styles/App.css';
import './styles/reset.css';
import {
  CardExpirationPeriodInput,
  CardIssuerInput,
  CardNumbersInput,
  CardPreview,
  CVCInput,
  UserNameInput,
} from './components';
import { INPUT_LENGTH } from './constants';
import useCardExpirationPeriodInput from './hooks/useCardExpirationPeriodInput';
import useCardIssuerInput from './hooks/useCardIssuerInput';
import useCardNumbersInput from './hooks/useCardNumbersInput';
import useCVCInput from './hooks/useCVCInput';
import useUserNameInput from './hooks/useUserNameInput';

function App() {
  const { CARD_NUMBERS, CARD_EXPIRATION, CARD_USER, CARD_CVC } = INPUT_LENGTH;

  const { numbers, numberErrors, handleNumberChange } =
    useCardNumbersInput(CARD_NUMBERS);

  const { period, periodErrors, handlePeriodChange } =
    useCardExpirationPeriodInput(CARD_EXPIRATION);

  const { userName, nameError, handleNameChange } = useUserNameInput();

  const {
    cardIssuer,
    cardIssuerError,
    handleCardIssuerChange,
    handleBlurCardIssuerSelect,
  } = useCardIssuerInput();

  const { CVCNumber, CVCNumberError, handleCVCNumberChange } = useCVCInput(3);

  return (
    <div id="app">
      <div className="inner">
        <CardPreview
          cardNumbers={numbers}
          period={period}
          userName={userName}
          cardIssuer={cardIssuer}
        />
        <form className="form-container">
          <fieldset>
            <CardNumbersInput
              maxLength={CARD_NUMBERS}
              numbers={numbers}
              numberErrors={numberErrors}
              onNumberChange={handleNumberChange}
            />
            <CardExpirationPeriodInput
              maxLength={CARD_EXPIRATION}
              period={period}
              periodErrors={periodErrors}
              onPeriodChange={handlePeriodChange}
            />
            <UserNameInput
              maxLength={CARD_USER}
              userName={userName}
              nameError={nameError}
              onNameChange={handleNameChange}
            />
            <CardIssuerInput
              cardIssuerError={cardIssuerError}
              onCardIssuerChange={handleCardIssuerChange}
              onBlurCardIssuerSelect={handleBlurCardIssuerSelect}
            />
            <CVCInput
              maxLength={CARD_CVC}
              CVCNumber={CVCNumber}
              CVCNumberError={CVCNumberError}
              onCVCNumberChange={handleCVCNumberChange}
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default App;
