import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAPI from '../../hooks/useAPI';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { ENDPOINT, METHODS } from '../../constant';
import * as Styled from './index.styled';

const CardList = () => {
  const navigate = useNavigate();
  const {
    isLoading,
    response: cardList,
    apiRequest,
    isError,
  } = useAPI({
    uri: ENDPOINT,
    method: METHODS.GET,
  });

  useLayoutEffect(() => {
    apiRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickAddCardButton = () => {
    navigate('/addCard');
  };

  return (
    <>
      <Header>
        <p>보유 카드</p>
      </Header>
      <Styled.Container>
        <Styled.AddCardButton onClick={onClickAddCardButton}>
          <p>+</p>
        </Styled.AddCardButton>
        {isLoading && <h4>카드 목록을 불러오고 있습니다.</h4>}
        {isError && <h4>잠시 후에 다시 시도해주세요.</h4>}
        {cardList &&
          cardList.map(
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
                <Styled.CardAlias>{alias}</Styled.CardAlias>
              </div>
            ),
          )}
      </Styled.Container>
    </>
  );
};

export default CardList;
