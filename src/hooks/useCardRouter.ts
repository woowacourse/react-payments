import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTER } from '../constants/router';

type CardInfo = {
  cardNumber?: string[];
  cardCompany?: string;
};

export const useCardRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cardInfo = (location.state as CardInfo) || {};

  const navigateToCardComplete = (info: CardInfo) => {
    navigate(ROUTER.COMPLETE, { state: info });
  };

  const navigateToHome = () => {
    navigate(ROUTER.DEFAULT);
  };

  return {
    cardInfo,
    navigateToCardComplete,
    navigateToHome,
  };
};
