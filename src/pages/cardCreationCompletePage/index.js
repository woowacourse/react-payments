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

    setNewCardInfo(prevState => ({ ...prevState, cardNickName }));
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
          cardNumber,
          cardOwner,
          cardExpiredDate,
        }}
      />
      <form onSubmit={handleNewCardSubmit}>
        <Styled.InputContainer>
          <TransparentInput
            value={cardNickName}
            onChange={({ target }) => setCardNickName(target.value)}
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
  newCardInfo: PropTypes.shape({
    cardNumber: PropTypes.objectOf(PropTypes.string),
    cardExpiredDate: PropTypes.objectOf(PropTypes.string),
    cardOwner: PropTypes.string,
    selectedCardInfo: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.oneOf([null])]),
      name: PropTypes.string,
      color: PropTypes.string,
    }).isRequired,
  }).isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setNewCardInfo: PropTypes.func.isRequired,
};

export default CardCreationCompletePage;
