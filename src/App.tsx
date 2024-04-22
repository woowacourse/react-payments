import './styles/App.css';
import './styles/reset.css';
import {
  CardExpirationPeriodInput,
  CardNumbersInput,
  CardPreview,
  CardUserNameInput,
} from './components';
import { INPUT_LENGTH } from './constants';
import useCardExpirationPeriodInput from './hooks/useCardExpirationPeriodInput';
import useCardNumbersInput from './hooks/useCardNumbersInput';
import useCardUserNameInput from './hooks/useCardUserNameInput';

function App() {
  const { CARD_NUMBERS, CARD_EXPIRATION, CARD_USER } = INPUT_LENGTH;

  const { numbers, numberErrors, handleNumberChange } =
    useCardNumbersInput(CARD_NUMBERS);

  const { period, periodErrors, handlePeriodChange } =
    useCardExpirationPeriodInput(CARD_EXPIRATION);

  const { userName, nameError, handleNameChange } = useCardUserNameInput();

  return (
    <div id="app">
      <div className="inner">
        <CardPreview
          cardNumbers={numbers}
          period={period}
          userName={userName}
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
            <CardUserNameInput
              maxLength={CARD_USER}
              userName={userName}
              nameError={nameError}
              onNameChange={handleNameChange}
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default App;
