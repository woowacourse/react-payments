import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from '../../../app/routes';
import { ICON_PATH } from '../../../shared/constants/cardImagePaths';
import './cardComplete.css';

const CardComplete = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cardNumber = location.state?.cardNumber || '0000';

  const handleConfirm = () => {
    navigate(ROUTES.CARD_REGISTRATION);
  };

  return (
    <div className="card-complete-container">
      <div className="card-complete-content">
        <div className="icon-check">
          <img src={ICON_PATH.CHECK} alt="icon_check" />
        </div>
        <div className="complete-message-content">
          <p>{`${cardNumber}로 시작하는`}</p>
          <p>{`BC카드가 등록되었어요.`}</p>
        </div>
        <button className="confirm-button" onClick={handleConfirm}>
          확인
        </button>
      </div>
    </div>
  );
};

export default CardComplete;
