import { useLocation, useNavigate } from 'react-router-dom';

type CardInfo = {
  cardNumber?: string[];
  cardCompany?: string;
};

export const useCardRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cardInfo = (location.state as CardInfo) || {};

  const navigateToCardComplete = (info: CardInfo) => {
    navigate('/card/complete', { state: info });
  };

  const navigateToHome = () => {
    navigate('/');
  };

  return {
    cardInfo,
    navigateToCardComplete,
    navigateToHome,
  };
};
