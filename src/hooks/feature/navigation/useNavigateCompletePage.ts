import { useLocation, useNavigate } from "react-router";

interface CompletePageState {
  cardNumber: string;
  cardCompany: string;
}

export const useCompletePageState = () => {
  const { state } = useLocation() as { state: CompletePageState | null };
  return {
    cardNumber: state?.cardNumber ?? "",
    cardCompany: state?.cardCompany ?? "",
  };
};

const useNavigateCompletePage = () => {
  const navigate = useNavigate();

  const navigateToCompletePage = (state: CompletePageState) => {
    navigate("/complete", { state });
  };

  return navigateToCompletePage;
};

export default useNavigateCompletePage;
