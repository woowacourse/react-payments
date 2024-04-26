import { useLocation, useNavigate } from 'react-router-dom';
import checkCircle from '../../assets/image/checkCircle.svg';
import Button from '../../components/common/Button/Button';
import { COMPANY_LIST, CardCompany } from '../../types/cardCompany';
import styles from './CompleteAddNewCardPage.module.css';
import { isCardCompany } from '../../utils/isCardCompany';
import { useEffect, useState } from 'react';
import { ERROR_MESSAGES } from '../../constants/errorMessages';

type CompleteAddNewCardPage = {
  firstCardNumberUnit: string;
  cardCompany: CardCompany;
};

const initialPageData = {
  firstCardNumberUnit: '',
  cardCompany: '',
};

const CompleteAddNewCardPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState<Record<string, string> | null>(initialPageData);

  useEffect(() => {
    if (location.state === null) {
      setData(null);
      return;
    }

    const firstCardNumberUnit = location.state.firstCardNumberUnit;
    const cardCompany = validatedCardCompany(location.state.cardCompany);
    setData({ firstCardNumberUnit, cardCompany });
  }, []);

  const handleConfirm = () => {
    navigate('/add-new-card');
  };

  const validatedCardCompany = (cardCompany: string) => {
    return isCardCompany(cardCompany) ? COMPANY_LIST[cardCompany] : '존재하지 않는 카드';
  };

  return (
    <div className={styles.container}>
      {data === null ? (
        <div>{ERROR_MESSAGES.INVALID_ACCESS}</div>
      ) : (
        <div className={styles.wrapper}>
          <img src={checkCircle} height='76' />
          <h2>
            {data.firstCardNumberUnit}로 시작하는
            <br /> {data.cardCompany}가 등록되었어요.
          </h2>
          <Button name='확인' size='l' buttonType='confirm' onClick={handleConfirm} />
        </div>
      )}
    </div>
  );
};

export default CompleteAddNewCardPage;
