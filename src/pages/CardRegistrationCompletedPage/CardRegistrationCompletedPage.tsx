import { useNavigate, useOutletContext } from 'react-router-dom';
import Button from '../../components/common/Button/Button';
import styles from './CardRegistrationCompletedPage.module.css';
import { FaCircleCheck } from 'react-icons/fa6';
import { CardCompany, CardNumber } from '../../types/card';

type Props = {
  cardNumbers: CardNumber;
  cardCompany: CardCompany | '';
};

export default function CardRegistrationCompletedPage() {
  const { cardNumbers, cardCompany } = useOutletContext<Props>();
  const navigate = useNavigate();

  const handleGoToCardRegistrationPage = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <FaCircleCheck size={76} />
      <p className={styles.description}>
        {cardNumbers.first}로 시작하는
        <br /> {cardCompany}가 등록되었어요.
      </p>
      <Button text="확인" height="44px" borderRadius="5px" onClick={handleGoToCardRegistrationPage} />
    </div>
  );
}
