import './App.css';

import {
  CardExpirationPeriodForm,
  CardNumbersForm,
  CardPreview,
  CardUserForm,
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
        <section>
          <CardNumbersForm
            editCardMark={editCardMark}
            editCardNumbers={editCardNumbers}
          />
          <CardExpirationPeriodForm editCardPeriod={editCardPeriod} />
          <CardUserForm editCardUserName={editCardUserName} />
        </section>
      </div>
    </div>
  );
}

export default App;
