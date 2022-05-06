import Header from '../components/Header/Header';
import Card from 'components/common/Card/Card';
import PageTitle from 'components/common/PageTitle/PageTitle';
import Button from 'components/common/Button/Button';

import CardInputForm from 'components/CardInputForm/CardInputForm';
import CardNumber from 'components/CardNumber/CardNumber';
import CardExpirationDate from 'components/CardExpirationDate/CardExpirationDate';
import CardOwner from 'components/CardOwner/CardOwner';
import CVC from 'components/CVC/CVC';
import Tooltip from 'components/Tooltip/Tooltip';
import CardPassword from 'components/CardPassword/CardPassword';
import PrevPageSign from 'components/PrevPageSign/PrevPageSign';

function CardAddPage({ setPage, dispatch, cardInfo }) {
  return (
    <div className="app">
      <Header>
        <PrevPageSign setPage={setPage} />
        <PageTitle title="카드추가" />
      </Header>
      <Card isEmpty={false} cardInfo={cardInfo} />
      <CardInputForm cardInfo={cardInfo}>
        <CardNumber
          cardNumbers={[cardInfo.number1, cardInfo.number2, cardInfo.number3, cardInfo.number4]}
          setCardNumbers={(cardNumbers) => dispatch({ type: 'SET_CARD_NUMBERS', cardNumbers })}
        />
        <CardExpirationDate
          cardExpirationDate={{ month: cardInfo.month, year: cardInfo.year }}
          setCardExpirationDate={(cardExpirationDate) =>
            dispatch({ type: 'SET_CRAD_EXPIRATION_DATE', cardExpirationDate })
          }
        />
        <CardOwner
          cardOwner={cardInfo.owner}
          setOwner={(cardOwner) => dispatch({ type: 'SET_OWNER', cardOwner })}
        />
        <CVC cvc={cardInfo.cvc} setCVC={(cvc) => dispatch({ type: 'SET_CVC', cvc })} />
        <Tooltip />
        <CardPassword
          cardPasswords={[cardInfo.password1, cardInfo.password2]}
          setCardPasswords={(cardPasswords) =>
            dispatch({ type: 'SET_CARD_PASSWORDS', cardPasswords })
          }
        />
        <Button text="다음" />
      </CardInputForm>
    </div>
  );
}

export default CardAddPage;
