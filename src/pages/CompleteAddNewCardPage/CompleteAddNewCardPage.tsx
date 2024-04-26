import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import checkCircle from '../../assets/image/checkCircle.svg';
import Button from '../../components/common/Button/Button';
import { COMPANY_LIST, CardCompany } from '../../types/cardCompany';
import styles from './CompleteAddNewCardPage.module.css';
import { isCardCompany } from '../../utils/isCardCompany';

type CompleteAddNewCardPage = {
  firstCardNumberUnit: string;
  cardCompany: CardCompany;
};

const CompleteAddNewCardPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const firstCardNumberUnit = location.state.firstCardNumberUnit;
  const cardCompany = location.state.cardCompany;

  const handleConfirm = () => {
    navigate('/add-new-card');
  };

  const validatedCardCompany = () => {
    return isCardCompany(cardCompany) ? COMPANY_LIST[cardCompany] : '존재하지 않는 카드';
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={checkCircle} height='76' />
        <h2>
          {firstCardNumberUnit}로 시작하는
          <br /> {validatedCardCompany()}가 등록되었어요.
        </h2>
        <Button name='확인' size='l' buttonType='confirm' onClick={handleConfirm} />
      </div>
    </div>
  );
};

export default CompleteAddNewCardPage;
