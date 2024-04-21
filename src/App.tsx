import './styles/App.css';
import './styles/reset.css';
import {
  CardExpirationPeriodInput,
  CardNumbersInput,
  CardPreview,
  CardUserNameInput,
} from './components';
import useCardExpirationPeriodInput from './hooks/useCardExpirationPeriodInput';
import useCardNumbersInput from './hooks/useCardNumbersInput';
import useCardUserNameInput from './hooks/useCardUserNameInput';

function App() {
  const { numbers, numberErrors, handleNumberChange } = useCardNumbersInput(4);
  const { period, periodErrors, handlePeriodChange } =
    useCardExpirationPeriodInput(2);
  const { userName, nameError, handleNameChange } = useCardUserNameInput();

  return (
    <div id="app">
      <div className="inner">
        <div>
          {period.month}/{period.year}
        </div>
        <div>{numbers}</div>
        <div>{userName}</div>

        {/* <CardPreview cardInfo={cardInfo} /> */}
        <form className="form-container">
          <fieldset>
            <CardNumbersInput
              numbers={numbers}
              numberErrors={numberErrors}
              onNumberChange={handleNumberChange}
            />
            <CardExpirationPeriodInput
              period={period}
              periodErrors={periodErrors}
              onPeriodChange={handlePeriodChange}
            />
            <CardUserNameInput
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
