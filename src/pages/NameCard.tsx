import Card from '../components/Card';
import Page from '../components/common/Page';
import styled from 'styled-components';
import { getLocalStorage } from '../utils/localStorage';
import RegisterCardName from '../components/RegisterCardName';
import { LOCALSTORAGE_KEY } from '../constants';
import { useState } from 'react';
import CardRegisterLoading from '../components/CardRegisterLoading';

const CardName = () => {
  const [card, setCard] = useState(getLocalStorage(LOCALSTORAGE_KEY.CARD).at(-1));

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Page>
      {loading ? (
        <CardRegisterLoading />
      ) : (
        <NameCardWrapper>
          <p>카드등록이 완료되었습니다.</p>
          <CardWrapper>
            {card && (
              <Card
                color={card.color}
                ownerName={card.ownerName}
                expiredDate={card.expiredDate}
                cardNumber={card.cardNumber}
                bankName={card.bankName}
                cvc={card.cvc}
                password={card.password}
              />
            )}
          </CardWrapper>
          <NameCardInputWrapper>
            <RegisterCardName card={card} setLoading={setLoading} setCard={setCard}/>
          </NameCardInputWrapper>
        </NameCardWrapper>
      )}
    </Page>
  );
};

const NameCardWrapper = styled.div`
  > p {
    font-size: 24px;
    margin: 60px 0 36px 0;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const NameCardInputWrapper = styled.div`
  margin-top: 120px;

  display: flex;
  justify-content: center;
`;

export default CardName;
