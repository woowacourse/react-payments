import { CardCompany } from '../type';
import { CARD_COMPANY_ENG } from '../utils/constants';
import './LoadingSpinner.css';

type LoadingSpinnerProps = {
  cardCompany: CardCompany;
};

const LoadingSpinner = ({ cardCompany }: LoadingSpinnerProps) => {
  return (
    <div className="loading-spinner-container">
      <div className={`card ${CARD_COMPANY_ENG[cardCompany]}`}>
        <div className="spinner">
          <svg className="spin-circle" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" />
          </svg>
        </div>
      </div>
      <div>카드를 등록중입니다...</div>
    </div>
  );
};

export default LoadingSpinner;
