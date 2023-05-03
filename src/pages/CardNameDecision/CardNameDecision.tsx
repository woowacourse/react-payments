import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cardImages } from '../cardImages';
import { CardInfoContext } from '../../contexts/CardInfoProvider';
import styles from './CardNameDecision.module.css';
import CardPreview from '../../components/common/CardPreview/CardPreview';
import CardNameDecisionForm from '../../components/CardNameDecisionForm/CardNameDecisionForm';

const CardNameDecision = () => {
  const { cardIssuer, cardNumber, cardOwnerName, cardExpirationDate } = useContext(CardInfoContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cardNumber.isValid) {
      alert('카드 정보가 아직 입력되지 않았습니다. 먼저 카드 정보를 입력해 주세요. 메인 페이지로 돌아갑니다.');
      navigate('/');
    }
  }, [navigate, cardNumber]);

  return (
    <>
      <h2 className={styles['complete-message']}>카드 등록이 완료되었습니다.</h2>
      <CardPreview
        cardIssuer={cardIssuer}
        cardNumber={cardNumber.value}
        cardOwnerName={cardOwnerName.value}
        cardExpirationDate={cardExpirationDate.value}
        image={cardImages[cardIssuer]}
      />
      <CardNameDecisionForm />
    </>
  );
};

export default CardNameDecision;
