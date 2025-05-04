import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTER } from '../constants/router';

type CardInfo = {
  cardNumber?: string[];
  cardCompany?: string;
};

export const useRouter = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate(ROUTER.DEFAULT);
  };

  return {
    navigateToHome,
  };
};

export const useCardPageRouter = () => {
  const navigate = useNavigate();

  const navigateToCardComplete = (info: CardInfo) => {
    navigate(ROUTER.COMPLETE, { state: info });
  };

  return {
    navigateToCardComplete,
  };
};

export const useCompletePageRouter = () => {
  const location = useLocation();
  const cardInfo = (location.state as CardInfo) || {};
  const router = useRouter();

  return {
    cardInfo,
    ...router,
  };
};
