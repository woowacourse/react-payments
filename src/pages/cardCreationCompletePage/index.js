import PropTypes from 'prop-types';
import { useState } from 'react';
import Styled from './style';
import { CreditCard, CARD_SIZE } from '../../components/commons/card/CreditCard';
import { TransparentInput } from '../../components/commons/input/TransparentInput';
import { Button } from '../../components/commons/button/Button';
import { PAGE } from '../../constants/page';
import { COLOR } from '../../constants/color';

const transparentInputStyles = {
  textAlign: 'center',
  fontSize: '18px',
  color: '#383838',
};

const CardCreationCompletePage = ({ setCurrentPage, newCardInfo, setNewCardInfo }) => {
  const [cardNickName, setCardNickName] = useState('');
  const { selectedCardInfo, cardNumber, cardOwner, cardExpiredDate } = newCardInfo;

  const handleNewCardSubmit = e => {
    e.preventDefault();

    alert('카드를 추가하였습니다.');
    setNewCardInfo(prevState => ({ ...prevState, cardNickName }));
    setCurrentPage(PAGE.CARD_LIST);
  };

  return (
    <>
      <Styled.Title>카드 등록이 완료되었습니다.</Styled.Title>
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
            placeholder="카드 이름을 입력해주세요."
            value={cardNickName}
            onChange={e => setCardNickName(e.target.value)}
            styles={transparentInputStyles}
            autoFocus
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
  setNewCardInfo: PropTypes.func.isRequired,
};

export default CardCreationCompletePage;
