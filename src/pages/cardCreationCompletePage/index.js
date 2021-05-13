import { withRouter, Redirect } from 'react-router';
import { useState } from 'react';
import Styled from './style';
import { CreditCard, CARD_SIZE } from '../../components/commons/card/CreditCard';
import { TransparentInput } from '../../components/commons/input/TransparentInput';
import { Button } from '../../components/commons/button/Button';
import { COLOR } from '../../constants/color';
import { firestore } from '../../firebase';

const transparentInputStyles = {
  textAlign: 'center',
  fontSize: '18px',
  color: '#383838',
};

const CardCreationCompletePage = ({ history, location }) => {
  const [cardNickname, setcardNickname] = useState('');

  if (!location.cardInfo) return <Redirect to="/" />;

  const { cardNumber, cardExpiredDate, cardOwner, selectedCardInfo, cardPassword, securityCode } = location.cardInfo;
  const cardListRef = firestore.collection('cardList');

  const handleNewCardSubmit = async e => {
    e.preventDefault();

    try {
      if (!navigator.onLine) {
        throw new Error('인터넷 연결을 확인해주세요.');
      }

      const cardInfo = {
        cardNumber,
        cardExpiredDate,
        cardOwner,
        selectedCardInfo,
        cardPassword,
        securityCode,
        cardNickname,
      };

      await cardListRef.add(cardInfo);

      alert('카드를 추가하였습니다.');
      history.push({ pathname: '/', cardInfo });
    } catch {
      alert('카드 추가에 실패하였습니다.\n잠시 후 다시 시도해주세요.');
    }
  };

  return (
    <>
      <Styled.Title>카드 등록이 완료되었습니다.</Styled.Title>
      <CreditCard
        size={CARD_SIZE.LG}
        backgroundColor={selectedCardInfo.color}
        cardType={selectedCardInfo.name}
        cardNumber={Object.values(cardNumber)}
        cardOwner={cardOwner}
        cardExpiredDate={cardExpiredDate}
      />
      <form onSubmit={handleNewCardSubmit}>
        <Styled.InputContainer>
          <TransparentInput
            placeholder="카드 이름을 입력해주세요."
            value={cardNickname}
            onChange={e => setcardNickname(e.target.value)}
            styles={transparentInputStyles}
            autoFocus
          />
        </Styled.InputContainer>
        {cardNickname && (
          <Styled.ButtonContainer>
            <Button styles={{ color: COLOR.MINT }}>확인</Button>
          </Styled.ButtonContainer>
        )}
      </form>
    </>
  );
};

export default withRouter(CardCreationCompletePage);
