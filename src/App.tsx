import './styles/App.css';
import './styles/global.css';
import './styles/reset.css';
import {
  CardCompanySelect,
  CardCVCInput,
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
    editCardCompany,
    editCardCVC,
  } = useCardInfoReducer();

  return (
    <div id="app">
      <div className="inner">
        <CardPreview cardInfo={cardInfo} />

        <form className="form-container">
          <fieldset>
            <CardCVCInput editCardCVC={editCardCVC} />
            <CardUserNameInput editCardUserName={editCardUserName} />
            <CardExpirationPeriodInput editCardPeriod={editCardPeriod} />
            <CardCompanySelect editCardCompany={editCardCompany} />
            <CardNumbersInput
              editCardMark={editCardMark}
              editCardNumbers={editCardNumbers}
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default App;
