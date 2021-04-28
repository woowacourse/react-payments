import { Link, useHistory } from 'react-router-dom';
import { Card } from '../../components';
import { ROUTE, LOCAL_STORAGE_KEY } from '../../constants';
import { useLocalStorage } from '../../hooks';
import { ScreenContainer } from '../../styles/common.styles';
import Styled from './CardList.styles';

const CardList = () => {
  const cardList = useLocalStorage(LOCAL_STORAGE_KEY.CARD_LIST);
  const history = useHistory();

  const onClick = (event) => {
    const {
      target: { id },
    } = event;

    const targetCard = cardList.value.find((card) => card.id === id);
    history.push({
      pathname: ROUTE.COMPLETE,
      state: {
        card: targetCard,
      },
    });
  };

  return (
    <ScreenContainer>
      <Styled.Container>
        <Link to={ROUTE.ADD}>
          <Styled.AddCard>
            <svg
              width="30"
              height="30"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.30372 7.18848H15.251V9.75195H9.30372V16.4902H6.57911V9.75195H0.631842V7.18848H6.57911V0.962891H9.30372V7.18848Z"
                fill="#575757"
              />
            </svg>
          </Styled.AddCard>
        </Link>
        <ul>
          {cardList.value &&
            cardList?.value.reverse().map((card) => {
              const {
                id,
                cardNumbers,
                cardCompanyName,
                cardCompanyColor,
                ownerName,
                expiryDate,
                nickname,
              } = card;

              return (
                <li key={id}>
                  <Card
                    id={id}
                    onClick={onClick}
                    bgColor={cardCompanyColor}
                    companyName={cardCompanyName}
                    cardNumbers={cardNumbers}
                    ownerName={ownerName}
                    expiryDate={expiryDate}
                  />
                  <Styled.Row>{nickname}</Styled.Row>
                </li>
              );
            })}
        </ul>
      </Styled.Container>
    </ScreenContainer>
  );
};

export default CardList;
