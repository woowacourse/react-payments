import './styles/App.css';
import './styles/reset.css';
import {
  CardExpirationPeriodInput,
  CardNumbersInput,
  CardPreview,
  CardUserNameInput,
} from './components';
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

  const { userName, nameError, handleNameChange } = useCardUserNameInput();

  return (
    <div id="app">
      <div className="inner">
        <div>{userName}</div>
        {/* <CardPreview cardInfo={cardInfo} /> */}
        <form className="form-container">
          <fieldset>
            {/* <CardNumbersInput
              editCardMark={editCardMark}
              editCardNumbers={editCardNumbers}
            />
            <CardExpirationPeriodInput editCardPeriod={editCardPeriod} /> */}
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
