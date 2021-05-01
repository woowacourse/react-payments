import PropTypes from 'prop-types';
import { Header } from '../../components/commons/header/Header';
import { Button } from '../../components/commons/button/Button';
import { Card } from '../../components/commons/card/Card';
import Styled from './style';
import { PAGE } from '../../constants/page';
import { CreditCard } from '../../components/commons/card/CreditCard';

const CardListPage = ({ setCurrentPage, cardList, setCardInfoForEdit }) => {
  const handleCardEdit = cardInfo => {
    setCardInfoForEdit(cardInfo);
    setCurrentPage(PAGE.CARD_CREATION);
  };

  const creditCardList = cardList.map(card => (
    <Styled.CardItem key={card.id}>
      <Button styles={{ textAlign: 'unset' }} onClick={() => handleCardEdit(card)}>
        <CreditCard
          backgroundColor={card.selectedCardInfo.color}
          content={{
            cardType: card.selectedCardInfo.name,
            cardNumber: card.cardNumber,
            cardOwner: card.cardOwner,
            cardExpiredDate: card.cardExpiredDate,
          }}
        />
      </Button>
      <Styled.CardNickname>{card.cardNickname}</Styled.CardNickname>
    </Styled.CardItem>
  ));

  return (
    <>
      <Header>보유카드</Header>
      <Styled.CardList>
        <Styled.CardItem>
          <Button onClick={() => setCurrentPage(PAGE.CARD_CREATION)}>
            <Card styles={{ boxShadow: 'none' }}>+</Card>
          </Button>
        </Styled.CardItem>
        {creditCardList}
      </Styled.CardList>
    </>
  );
};

CardListPage.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  setCardInfoForEdit: PropTypes.func.isRequired,
  cardList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardListPage;
