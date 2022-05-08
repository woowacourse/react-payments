import styled from 'styled-components';

import { Card, EmptyCard, Header, ModalPortal } from 'components';

import { useGetCardList } from 'hooks';

import getMaskedNumbers from 'utils/maskNumbers';
// import { ReactComponent as Spinner } from 'assets/spinner.svg';
import Loading from 'assets/loading.png';

function CardList() {
  const { cardList, isLoading } = useGetCardList();

  return (
    <>
      <Header title="보유 카드" />
      {isLoading ? (
        <ModalPortal>
          <Styled.SpinnerContainer>
            <Styled.Spinner src={Loading} />
          </Styled.SpinnerContainer>
        </ModalPortal>
      ) : (
        <Styled.CardList>
          {cardList &&
            cardList.map(
              (
                {
                  attributes: {
                    cardNumber,
                    cardKind,
                    cardNickname,
                    cardOwnerName,
                    validDate,
                  },
                },
                index
              ) => (
                <Styled.NicknamedCardContainer key={index}>
                  <Card
                    bgColor={cardKind.color}
                    name={cardOwnerName || ' '}
                    number={getMaskedNumbers(cardNumber)}
                    title={cardKind.title}
                    validDate={validDate}
                  />
                  <Styled.CardNickname>{cardNickname}</Styled.CardNickname>
                </Styled.NicknamedCardContainer>
              )
            )}
          <EmptyCard />
        </Styled.CardList>
      )}
    </>
  );
}

const Styled = {
  CardList: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    row-gap: 26px;
  `,

  SpinnerContainer: styled.div`
    align-items: center;
    display: flex;
    height: 757px;
    opacity: 0.8;
    justify-content: center;
    width: 400px;
  `,

  Spinner: styled.img`
    animation: spin 2500ms infinite linear;
    width: 50px;

    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
  `,

  NicknamedCardContainer: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  `,

  CardNickname: styled.p`
    font-size: 14px;
    height: 14px;
  `,
};

export default CardList;
