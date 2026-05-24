import { useNavigate } from "react-router";

const useNavigateCardsPage = () => {
  const navigate = useNavigate();

  const navigateToCardsPage = () => {
    navigate("/cards");
  };

  return navigateToCardsPage;
};

export default useNavigateCardsPage;
