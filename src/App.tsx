import './styles/App.css';
import './styles/reset.css';
import {
  CardBack,
  CardExpirationPeriodInput,
  CardFront,
  CardIssuerInput,
  CardNumbersInput,
  CVCInput,
  UserNameInput,
} from './components';
import PasswordInput from './components/CardInput/InputContainer/PasswordInput';
import { Password } from './components/CardInput/InputContainer/PasswordInput/PasswordInput.stories';
import { INPUT_LENGTH } from './constants';
import {
  useCardExpirationPeriodInput,
  useCardIssuerInput,
  useCardNumbersInput,
  useCVCInput,
  usePasswordInput,
  useUserNameInput,
} from './hooks';

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

  const {
    CVCNumber,
    CVCNumberError,
    showCardBack,
    handleCVCNumberChange,
    handleShowCardBack,
  } = useCVCInput(3);

  const { password, passwordError, handlePasswordChange } = usePasswordInput(2);

  return (
    <div id="app">
      <div className="inner">
        {showCardBack ? (
          <CardBack CVCNumber={CVCNumber} />
        ) : (
          <CardFront
            cardNumbers={numbers}
            period={period}
            userName={userName}
            cardIssuer={cardIssuer}
          />
        )}
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
              onFocus={handleShowCardBack}
              onBlur={handleShowCardBack}
            />
            <PasswordInput
              password={password}
              passwordError={passwordError}
              onPasswordChange={handlePasswordChange}
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default App;
