import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../shared/config/routes';
import useCardInfo from '../../features/cardInfo/hooks/useCardInfo';
import Preview from '../../features/preview/ui/Preview';
import CardInfoContainer from '../../features/cardInfo/ui/CardInfoContainer';
import './cardRegistration.css';

const CardRegistration = () => {
  const { cardInfo, handleCardInfoChange, error, currentSection, isAllSectionsCompleted } =
    useCardInfo();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(ROUTES.CARD_COMPLETE, {
      state: {
        cardNumber: cardInfo.cardNumber[0],
        cardCompany: cardInfo.cardCompany,
      },
    });
  };

  return (
    <div className="card-container">
      <form onSubmit={handleSubmit} className="card-content">
        <Preview cardInfo={cardInfo} />
        <CardInfoContainer
          onChange={handleCardInfoChange}
          error={error}
          currentSection={currentSection}
        />
        {isAllSectionsCompleted && (
          <button type="submit" className="submit-button">
            확인
          </button>
        )}
      </form>
    </div>
  );
};

export default CardRegistration;
