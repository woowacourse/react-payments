import PropTypes from 'prop-types';
import { useContext } from 'react';
import Styled from './style';
import { CreditCard, CARD_SIZE } from '../../components/commons/card/CreditCard';
import { TransparentInput } from '../../components/commons/input/TransparentInput';
import { Button } from '../../components/commons/button/Button';
import { PAGE } from '../../constants/page';
import { COLOR } from '../../constants/color';
import { httpClient } from '../../api/httpClient';
import { PATH, RETURN_TYPE } from '../../constants/api';
import CardDataContext from '../../context/CardDataContext';

const transparentInputStyles = {
  textAlign: 'center',
  fontSize: '18px',
  color: COLOR.GRAY_700,
};

const CardCreationCompletePage = ({ setCardList }) => {
  const { cardInfo, editCardId, setCardInfo, setCurrentPage } = useContext(CardDataContext);

  const { cardNumber, cardExpiredDate, cardOwner, selectedCardInfo, cardNickname } = cardInfo;

  const handleInputChange = ({ target }) => {
    setCardInfo(prevState => ({ ...prevState, cardNickname: target.value }));
  };

  const handleCardSubmit = e => {
    e.preventDefault();

    editCardId ? editCard() : addCard();

    setCurrentPage(PAGE.CARD_LIST);
  };

  const addCard = async () => {
    const result = await httpClient.post({ path: PATH.CARD_LIST, body: cardInfo, returnType: RETURN_TYPE.JSON });

    setCardList(prevState => [...prevState, { ...cardInfo, id: result.id }]);
  };

  const editCard = async () => {
    await httpClient.put({ path: `${PATH.CARD_LIST}/${editCardId}`, body: cardInfo });

    setCardList(prevState => {
      const copiedState = [...prevState];
      const targetIndex = copiedState.findIndex(card => card.id === editCardId);
      copiedState[targetIndex] = { ...cardInfo, id: editCardId };

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
          <TransparentInput value={cardNickname} onChange={handleInputChange} styles={transparentInputStyles} />
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
  setCardList: PropTypes.func.isRequired,
};

export default CardCreationCompletePage;
