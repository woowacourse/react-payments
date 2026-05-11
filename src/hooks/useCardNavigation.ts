import { useNavigate } from "react-router";
import type { AddCardCompletePageState } from "@/pages/AddCardCompletePage";
import { ROUTE_PATH } from "@/constants/routes";

const useCardNavigation = () => {
  const navigate = useNavigate();

  const goToAddCardPage = () => {
    navigate(ROUTE_PATH.ADD_CARD);
  };

  const goToAddCardCompletePage = (state: AddCardCompletePageState) => {
    navigate(ROUTE_PATH.ADD_CARD_COMPLETE, { state });
  };

  return {
    goToAddCardPage,
    goToAddCardCompletePage,
  };
};

export default useCardNavigation;
