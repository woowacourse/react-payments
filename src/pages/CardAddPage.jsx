import { useState } from 'react';

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

function CardAddPage({ setPage }) {
  const [cardInfo, setCardInfo] = useState({
    number1: '',
    number2: '',
    number3: '',
    number4: '',
    month: '',
    year: '',
    owner: '',
    cvc: '',
    password1: '',
    password2: '',
  });

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
          setCardNumbers={(cardNumbers) =>
            setCardInfo((prev) => ({
              ...prev,
              number1: cardNumbers[0],
              number2: cardNumbers[1],
              number3: cardNumbers[2],
              number4: cardNumbers[3],
            }))
          }
        />
        <CardExpirationDate
          cardExpirationDate={{ month: cardInfo.month, year: cardInfo.year }}
          setCardExpirationDate={(cardExpirationDate) =>
            setCardInfo((prev) => ({
              ...prev,
              month: cardExpirationDate.month,
              year: cardExpirationDate.year,
            }))
          }
        />
        <CardOwner
          cardOwner={cardInfo.owner}
          setOwner={(cardOwner) => setCardInfo((prev) => ({ ...prev, owner: cardOwner }))}
        />
        <CVC cvc={cardInfo.cvc} setCVC={(cvc) => setCardInfo((prev) => ({ ...prev, cvc: cvc }))} />
        <Tooltip />
        <CardPassword
          cardPasswords={[cardInfo.password1, cardInfo.password2]}
          setCardPasswords={(cardPasswords) =>
            setCardInfo((prev) => ({
              ...prev,
              password1: cardPasswords[0],
              password2: cardPasswords[1],
            }))
          }
        />
        <Button text="다음" />
      </CardInputForm>
    </div>
  );
}

export default CardAddPage;
