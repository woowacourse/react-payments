import PropTypes from 'prop-types';
import { useState } from 'react';
import { firestore } from '../../firebase';
import Styled from './style';
import { CreditCard, CARD_SIZE } from '../../components/commons/card/CreditCard';
import { TransparentInput } from '../../components/commons/input/TransparentInput';
import { Button } from '../../components/commons/button/Button';
import { PAGE } from '../../constants/page';
import { COLOR } from '../../constants/color';

const cardListRef = firestore.collection('cardList');

const transparentInputStyles = {
  textAlign: 'center',
  fontSize: '18px',
  color: '#383838',
};

const CardCreationCompletePage = ({ setCurrentPage, newCardInfo, setCardList }) => {
  const [cardNickName, setCardNickName] = useState('');
  const { selectedCardInfo, cardNumber, cardOwner, cardExpiredDate } = newCardInfo;

  const handleNewCardSubmit = async e => {
    e.preventDefault();

    const content = { ...newCardInfo, cardNickName };
    const resposne = await cardListRef.add(content);

    setCardList(prevState => [...prevState, { id: resposne.id, content }]);
    setCurrentPage(PAGE.CARD_LIST);
  };

  return (
    <>
      <Styled.Title>카드등록이 완료되었습니다.</Styled.Title>
      <CreditCard
        size={CARD_SIZE.LG}
        backgroundColor={selectedCardInfo.color}
        content={{
          cardType: selectedCardInfo.name,
          cardNumber: Object.values(cardNumber),
          cardOwner,
          cardExpiredDate,
        }}
      />
      <form onSubmit={handleNewCardSubmit}>
        <Styled.InputContainer>
          <TransparentInput
            value={cardNickName}
            onChange={e => setCardNickName(e.target.value)}
            styles={transparentInputStyles}
          />
        </Styled.InputContainer>
        {cardNickName && (
          <Styled.ButtonContainer>
            <Button styles={{ color: COLOR.MINT }}>확인</Button>
          </Styled.ButtonContainer>
        )}
      </form>
    </>
  );
};

CardCreationCompletePage.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  newCardInfo: PropTypes.object.isRequired,
  setCardList: PropTypes.func.isRequired,
};

export default CardCreationCompletePage;
