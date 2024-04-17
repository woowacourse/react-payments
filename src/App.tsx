import './App.css';

import {
  CardExpirationPeriodForm,
  CardNumbersForm,
  CardPreview,
  CardUserForm,
} from './components';
import useCardInfoReducer from './modules/useCardInfoReducer';

function App() {
  const { cardInfo, editCardMark, editCardNumbers } = useCardInfoReducer();
  return (
    <>
      <h1>React Payments</h1>
      <CardNumbersForm
        editCardMark={editCardMark}
        editCardNumbers={editCardNumbers}
      />
      <CardExpirationPeriodForm />
      <CardUserForm />
      <div>
        <CardPreview cardInfo={cardInfo} />
      </div>
    </>
  );
}

export default App;
