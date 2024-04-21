import './styles/App.css';
import './styles/reset.css';
import {
  CardExpirationPeriodInput,
  CardNumbersInput,
  CardPreview,
  CardUserNameInput,
} from './components';
import useCardNumbersInput from './hooks/useCardNumbersInput';
import useCardUserNameInput from './hooks/useCardUserNameInput';
// import useCardInfoReducer from './modules/useCardInfoReducer';

function App() {
  // const {
  //   cardInfo,
  //   editCardMark,
  //   editCardNumbers,
  //   editCardPeriod,
  //   editCardUserName,
  // } = useCardInfoReducer();

  const { numbers, numberErrors, handleNumberChange } = useCardNumbersInput(4);
  const { userName, nameError, handleNameChange } = useCardUserNameInput();

  return (
    <div id="app">
      <div className="inner">
        <div>{userName}</div>
        <div>{numbers}</div>
        {/* <CardPreview cardInfo={cardInfo} /> */}
        <form className="form-container">
          <fieldset>
            <CardNumbersInput
              numbers={numbers}
              numberErrors={numberErrors}
              onNumberChange={handleNumberChange}
            />
            {/* <CardExpirationPeriodInput editCardPeriod={editCardPeriod} /> */}
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
