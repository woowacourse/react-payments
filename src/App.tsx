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
  const { cardNumber, cardExpiration, cardCVC, cardPassword } = INPUT_LENGTH;

  const { numbers, numberErrors, isCardNumbersAllFilled, handleNumberChange } =
    useCardNumbersInput(cardNumber);

  const {
    cardIssuer,
    cardIssuerError,
    handleCardIssuerChange,
    handleBlurCardIssuerSelect,
  } = useCardIssuerInput();

  const { period, periodErrors, isPeriodAllFilled, handlePeriodChange } =
    useCardExpirationPeriodInput(cardExpiration);

  const {
    CVCNumber,
    CVCNumberError,
    isCVCNumberFilled,
    showCardBack,
    handleCVCNumberChange,
    handleShowCardBack,
  } = useCVCInput(3);

  const {
    userName,
    nameError,
    isUserNameFilled,
    handleNameChange,
    handleNameInputEnter,
  } = useUserNameInput();

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
            {isCVCNumberFilled && (
              <PasswordInput
                maxLength={cardPassword}
                password={password}
                passwordError={passwordError}
                onPasswordChange={handlePasswordChange}
              />
            )}
            {isUserNameFilled && (
              <CVCInput
                maxLength={cardCVC}
                CVCNumber={CVCNumber}
                CVCNumberError={CVCNumberError}
                onCVCNumberChange={handleCVCNumberChange}
                onFocus={handleShowCardBack}
                onBlur={handleShowCardBack}
              />
            )}
            {isPeriodAllFilled && (
              <UserNameInput
                userName={userName}
                nameError={nameError}
                onNameChange={handleNameChange}
                onNameInputEnter={handleNameInputEnter}
              />
            )}
            {cardIssuer && (
              <CardExpirationPeriodInput
                maxLength={cardExpiration}
                period={period}
                periodErrors={periodErrors}
                onPeriodChange={handlePeriodChange}
              />
            )}
            {isCardNumbersAllFilled && (
              <CardIssuerInput
                cardIssuerError={cardIssuerError}
                onCardIssuerChange={handleCardIssuerChange}
                onBlurCardIssuerSelect={handleBlurCardIssuerSelect}
              />
            )}
            <CardNumbersInput
              maxLength={cardNumber}
              numbers={numbers}
              numberErrors={numberErrors}
              onNumberChange={handleNumberChange}
            />
          </fieldset>
          {!isError && !isBlank && <Button onClick={() => {}}>확인</Button>}
        </form>
      </div>
    </div>
  );
}

export default App;
