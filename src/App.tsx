import './styles/App.css';
import './styles/reset.css';
import {
  CardBack,
  CardExpirationPeriodInput,
  CardFront,
  CardIssuerInput,
  CardNumbersInput,
  CVCInput,
  PasswordInput,
  UserNameInput,
} from './components';
import Button from './components/common/Button';
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
  const { cardNumbers, cardExpiration, cardUser, cardCVC, cardPassword } =
    INPUT_LENGTH;

  const { numbers, numberErrors, handleNumberChange } =
    useCardNumbersInput(cardNumbers);

  const { period, periodErrors, handlePeriodChange } =
    useCardExpirationPeriodInput(cardExpiration);

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

  /**
   * 확인 버튼
   */
  const errors = [
    numberErrors,
    periodErrors,
    nameError,
    cardIssuerError,
    CVCNumberError,
    passwordError,
  ];

  const inputs = [numbers, period, userName, cardIssuer, CVCNumber, password];

  const isError = errors.some((error) => error === true);
  const isBlank = inputs.some((input) => input === '');

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
              maxLength={cardUser}
              numbers={numbers}
              numberErrors={numberErrors}
              onNumberChange={handleNumberChange}
            />
            <CardExpirationPeriodInput
              maxLength={cardExpiration}
              period={period}
              periodErrors={periodErrors}
              onPeriodChange={handlePeriodChange}
            />
            <UserNameInput
              maxLength={cardUser}
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
              maxLength={cardCVC}
              CVCNumber={CVCNumber}
              CVCNumberError={CVCNumberError}
              onCVCNumberChange={handleCVCNumberChange}
              onFocus={handleShowCardBack}
              onBlur={handleShowCardBack}
            />
            <PasswordInput
              maxLength={cardPassword}
              password={password}
              passwordError={passwordError}
              onPasswordChange={handlePasswordChange}
            />
          </fieldset>
          {!isError && !isBlank && <Button onClick={() => {}}>확인</Button>}
        </form>
      </div>
    </div>
  );
}

export default App;
