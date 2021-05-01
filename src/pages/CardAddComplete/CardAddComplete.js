import { useHistory, useLocation, Redirect } from 'react-router-dom';
import Styled from './CardAddComplete.styles';
import { Card, Input, Button } from '../../components';
import { MESSAGE, LOCAL_STORAGE_KEY, ROUTE } from '../../constants';
import { useInput, useLocalStorage } from '../../hooks';
import { ScreenContainer } from '../../styles/common.styles';

const CardAddComplete = () => {
  const history = useHistory();
  const location = useLocation();

  const nickname = useInput('');

  const cardList = useLocalStorage(LOCAL_STORAGE_KEY.CARD_LIST);

  if (!location.state?.card) return <Redirect to={ROUTE.HOME} />;

  const {
    id,
    cardCompanyName,
    cardCompanyColor,
    ownerName,
    expiryDate,
    cardNumbers,
  } = location.state.card;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nickname.value) {
      const newCardList = cardList.value;
      const targetCard = newCardList.find((card) => card.id === id);
      targetCard.nickname = nickname.value;

      cardList.setValue(newCardList);
    }

    history.push({
      pathname: ROUTE.HOME,
    });
  };

  return (
    <ScreenContainer>
      <Styled.Container>
        <Styled.Header>{MESSAGE.CARD_ADD_COMPLETE}</Styled.Header>
        <Card
          size="large"
          bgColor={cardCompanyColor}
          companyName={cardCompanyName}
          cardNumbers={cardNumbers}
          ownerName={ownerName}
          expiryDate={expiryDate}
        />
        <form onSubmit={handleSubmit}>
          <Styled.InputContainer>
            <Input
              simple
              textAlign="center"
              placeholder="카드 별칭 (선택)"
              autoFocus
              maxLength={10}
              value={nickname.value}
              onChange={nickname.onChange}
            />
          </Styled.InputContainer>
          <Styled.ButtonContainer>
            <Button>확인</Button>
          </Styled.ButtonContainer>
        </form>
      </Styled.Container>
    </ScreenContainer>
  );
};

export default CardAddComplete;
