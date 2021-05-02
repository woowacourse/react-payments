import PropTypes from 'prop-types';
import { useState, useEffect, useContext } from 'react';
import { firestore } from '../../firebase';
import Styled from './style';
import { CreditCard, CARD_SIZE } from '../../components/commons/card/CreditCard';
import { TransparentInput } from '../../components/commons/input/TransparentInput';
import { Button } from '../../components/commons/button/Button';
import { PAGE } from '../../constants/page';
import { COLOR } from '../../constants/color';
import { ALERT_MESSAGE } from '../../constants/message';
import { TargetCardIdContext } from '../../contexts/TargetCardIdContext';

const cardListRef = firestore.collection('cardList');

const transparentInputStyles = {
  textAlign: 'center',
  fontSize: '18px',
  color: '#383838',
};

const CardCreationCompletePage = ({ setCurrentPage, newCardInfo, targetCardId, setCardList }) => {
  const { actions } = useContext(TargetCardIdContext);

  const [cardNickName, setCardNickName] = useState('');
  const { selectedCardInfo, cardNumber, cardOwner, cardExpiredDate } = newCardInfo;

  useEffect(() => {
    const fetchData = async () => {
      const response = await cardListRef.doc(targetCardId).get();
      const { cardNickName } = response.data();

      setCardNickName(cardNickName);
    };

    if (targetCardId) {
      fetchData();
    }
  }, []);

  const handleNewCardSubmit = async e => {
    e.preventDefault();

    const content = { ...newCardInfo, cardNickName };

    const resposne = targetCardId
      ? await cardListRef.doc(targetCardId).update(content) // 기존 정보 수정
      : await cardListRef.add(content); // 새로 추가

    targetCardId ? alert(ALERT_MESSAGE.SUCCECC_CARD_UPDATE) : alert(ALERT_MESSAGE.SUCCECC_CARD_CREATE);

    setCardList(prevState => [
      ...prevState.filter(card => card.id !== targetCardId),
      { id: targetCardId || resposne.id, content },
    ]);
    actions.setTargetCardId('');
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
