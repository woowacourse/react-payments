import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../app/routes';
import useCardInfo from '../../cardInfo/hooks/useCardInfo';
import Preview from '../../preview/ui/Preview';
import CardInfoContainer from '../../cardInfo/ui/CardInfoContainer';
import './cardRegistration.css';

const CardRegistration = () => {
  const { cardInfo, handleCardInfoChange, error, currentSection, isAllSectionsCompleted } =
    useCardInfo();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(ROUTES.CARD_COMPLETE);
  };

  return (
    <div className="card-container">
      <main className="card-content">
        <Preview cardInfo={cardInfo} />
        <CardInfoContainer
          onChange={handleCardInfoChange}
          error={error}
          currentSection={currentSection}
        />
        {isAllSectionsCompleted && (
          <button className="submit-button" onClick={handleSubmit}>
            확인
          </button>
        )}
      </main>
    </div>
  );
};

export default CardRegistration;
