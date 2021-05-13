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

const CardNicknameChangePage = ({ history, location }) => {
  const [cardNickname, setcardNickname] = useState(location.cardInfo?.cardNickname);
  const cardListRef = firestore.collection('cardList');

  if (!location.cardInfo) return <Redirect to="/" />;

  const { id, selectedCardInfo, cardNumber, cardOwner, cardExpiredDate } = location.cardInfo;

  const handleNewCardSubmit = async e => {
    e.preventDefault();

    try {
      if (!navigator.onLine) {
        throw new Error('인터넷 연결을 확인해주세요.');
      }

      await cardListRef.doc(id).update({ cardNickname: cardNickname });

      alert('카드 정보를 수정하였습니다.');
      history.push('/');
    } catch {
      alert('카드 정보 수정에 실패하였습니다.\n잠시 후 다시 시도해주세요.');
    }
  };

  return (
    <>
      <Styled.Title>카드 별칭 수정</Styled.Title>
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

export default withRouter(CardNicknameChangePage);
