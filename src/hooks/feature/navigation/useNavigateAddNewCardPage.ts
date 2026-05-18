import { useNavigate } from "react-router";

const useNavigateAddNewCardPage = () => {
  const navigate = useNavigate();

  const navigateToAddNewCardPage = () => {
    navigate("/");
  };

  return navigateToAddNewCardPage;
};

export default useNavigateAddNewCardPage;
