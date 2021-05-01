import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Styled from './style';
import { CreditCard, CARD_SIZE } from '../../components/commons/card/CreditCard';
import { TransparentInput } from '../../components/commons/input/TransparentInput';
import { Button } from '../../components/commons/button/Button';
import { PAGE } from '../../constants/page';
import { COLOR } from '../../constants/color';
import { httpClient } from '../../api/httpClient';
import { PATH, RETURN_TYPE } from '../../constants/api';

const transparentInputStyles = {
  textAlign: 'center',
  fontSize: '18px',
  color: COLOR.GRAY_700,
};

const CardCreationCompletePage = ({ setCurrentPage, newCardInfo, setCardList, cardNicknameForEdit }) => {
  const [cardNickname, setCardNickname] = useState('');
  const { selectedCardInfo, cardNumber, cardOwner, cardExpiredDate, id: editId } = newCardInfo;

  const content = { ...newCardInfo, cardNickname };

  useEffect(() => {
    cardNicknameForEdit && setCardNickname(cardNicknameForEdit);
  }, [cardNicknameForEdit]);

  const handleCardSubmit = e => {
    e.preventDefault();

    cardNicknameForEdit ? editCard() : addCard();

    setCurrentPage(PAGE.CARD_LIST);
  };

  const addCard = async () => {
    const result = await httpClient.post({ path: PATH.CARD_LIST, body: content, returnType: RETURN_TYPE.JSON });

    setCardList(prevState => [...prevState, { ...content, id: result.id }]);
  };

  const editCard = async () => {
    await httpClient.put({ path: `${PATH.CARD_LIST}/${editId}`, body: content });

    setCardList(prevState => {
      const copiedState = [...prevState];
      const targetIndex = copiedState.findIndex(card => card.id === editId);
      copiedState[targetIndex] = { ...content, id: editId };

      return copiedState;
    });
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
      <form onSubmit={handleCardSubmit}>
        <Styled.InputContainer>
          <TransparentInput
            value={cardNickname}
            onChange={({ target }) => setCardNickname(target.value)}
            styles={transparentInputStyles}
          />
        </Styled.InputContainer>
        {cardNickname && (
          <Styled.ButtonContainer>
            <Button styles={{ color: COLOR.MINT_500 }}>확인</Button>
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
  cardNicknameForEdit: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  setCardList: PropTypes.func.isRequired,
};

export default CardCreationCompletePage;
