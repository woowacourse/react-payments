import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cardImages } from './cardImages';
import { CardInfoContext } from '../CardInfoProvider';
import styles from './CardNameDecision.module.css';
import CardPreview from '../components/common/CardPreview/CardPreview';
import CardNameDecisionForm from '../components/CardNameDecisionForm/CardNameDecisionForm';
import type { CardInfo } from '../types';

type CardNameDecisionProps = {
  saveCardToLocalStorage: (newCard: CardInfo) => void;
};

const CardNameDecision = ({ saveCardToLocalStorage }: CardNameDecisionProps) => {
  const { cardIssuer, cardNumber, cardOwnerName, cardExpirationDate } = useContext(CardInfoContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cardNumber.isValid) {
      alert('카드 정보도 입력 안 됐는데 이름 설정을 하려고 해?!');
      navigate('/');
    }
  }, [navigate, cardNumber]);

  return (
    <>
      <h2 className={styles['complete-message']}>카드 등록이 완료되었습니다.</h2>
      <CardPreview
        cardNumber={cardNumber.value}
        cardOwnerName={cardOwnerName.value}
        cardExpirationDate={cardExpirationDate.value}
        image={cardImages[cardIssuer]}
      />
      <CardNameDecisionForm saveCardToLocalStorage={saveCardToLocalStorage} />
    </>
  );
};

export default CardNameDecision;
