import './styles/App.css';
import './styles/reset.css';
import {
  CardExpirationPeriodInput,
  CardNumbersInput,
  CardPreview,
  CardUserNameInput,
} from './components';
import useCardInfoReducer from './modules/useCardInfoReducer';

function App() {
  const {
    cardInfo,
    editCardMark,
    editCardNumbers,
    editCardPeriod,
    editCardUserName,
  } = useCardInfoReducer();

  return (
    <div id="app">
      <div className="inner">
        <CardPreview cardInfo={cardInfo} />

        <form className="form-container">
          <fieldset>
            <CardNumbersInput
              editCardMark={editCardMark}
              editCardNumbers={editCardNumbers}
            />
            <CardExpirationPeriodInput editCardPeriod={editCardPeriod} />
            <CardUserNameInput editCardUserName={editCardUserName} />
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default App;
