import { useNavigate } from "react-router";

interface NavigateCompletePageParams {
  cardNumber: string;
  cardCompany: string;
}

const useNavigateCompletePage = () => {
  const navigate = useNavigate();

  const navigateToCompletePage = (state: NavigateCompletePageParams) => {
    navigate("/complete", {
      state,
    });
  };

  return navigateToCompletePage;
};

export default useNavigateCompletePage;
