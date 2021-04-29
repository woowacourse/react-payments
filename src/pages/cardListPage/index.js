import PropTypes from 'prop-types';
import { Header } from '../../components/commons/header/Header';
import { Button } from '../../components/commons/button/Button';
import { Card, CARD_SIZE } from '../../components/commons/card/Card';
import Styled from './style';
import { PAGE } from '../../constants/page';
import { CreditCard } from '../../components/commons/card/CreditCard';

const CardListPage = ({ setCurrentPage, cardList }) => (
  <>
    <Header>보유카드</Header>

    <Styled.CardListContainer>
      {cardList.map(({ id, content }) => (
        <Styled.CardContainer key={id}>
          <CreditCard
            size={CARD_SIZE.MD}
            backgroundColor={content?.selectedCardInfo.color}
            content={{
              cardType: content?.selectedCardInfo.name,
              cardNumber: content?.cardNumber && Object.values(content.cardNumber),
              cardOwner: content?.cardOwner,
              cardExpiredDate: content?.cardExpiredDate,
            }}
          />
          <Styled.NickName>{content.cardNickName}</Styled.NickName>
        </Styled.CardContainer>
      ))}
    </Styled.CardListContainer>

    <Styled.ButtonContainer>
      <Button onClick={() => setCurrentPage(PAGE.CARD_CREATION)}>
        <Card style={{ boxShadow: 'none' }}>+</Card>
      </Button>
    </Styled.ButtonContainer>
  </>
);

CardListPage.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};

export default CardListPage;
