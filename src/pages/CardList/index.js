import { useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_GET_CARD } from '../../api';
import Header from '../../components/Header';
import Card from '../../components/Card';
import * as styled from './index.styled';

const CardList = () => {
  const navigate = useNavigate();
  const [cardList, setCardList] = useState([]);
  useLayoutEffect(() => {
    API_GET_CARD().then((data) => {
      setCardList(data);
    });
  }, []);

  const onClickAddCardButton = () => {
    navigate('/addCard');
  };

  return (
    <>
      <Header title="보유카드" />
      <styled.Container>
        {cardList.map(
          ({
            id,
            alias,
            firstCardNumber,
            secondCardNumber,
            thirdCardNumber,
            fourthCardNumber,
            cardType,
            ownerName,
            expiredMonth,
            expiredYear,
            secureCode,
          }) => (
            <div key={id}>
              <Card
                firstCardNumber={firstCardNumber}
                secondCardNumber={secondCardNumber}
                thirdCardNumber={thirdCardNumber}
                fourthCardNumber={fourthCardNumber}
                cardType={cardType}
                ownerName={ownerName}
                expiredMonth={expiredMonth}
                expiredYear={expiredYear}
                secureCode={secureCode}
              />
              <styled.CardAlias>{alias}</styled.CardAlias>
            </div>
          ),
        )}
        <styled.AddCardButton onClick={onClickAddCardButton}>
          <p>+</p>
        </styled.AddCardButton>
      </styled.Container>
    </>
  );
};

export default CardList;
