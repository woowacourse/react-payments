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
    <>
      <h1>React Payments</h1>
      <CardNumbersForm
        editCardMark={editCardMark}
        editCardNumbers={editCardNumbers}
      />
      <CardExpirationPeriodForm editCardPeriod={editCardPeriod} />
      <CardUserForm editCardUserName={editCardUserName} />
      <div>
        <CardPreview cardInfo={cardInfo} />
      </div>
    </>
  );
}

export default App;
