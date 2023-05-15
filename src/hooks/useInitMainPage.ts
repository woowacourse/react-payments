import { useNavigate } from "react-router-dom";
import { getData } from "utils/getDataFromLocalStorage";
import { CARD_REGISTER_PAGE } from "constants/path";

const useInitMainPage = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    navigate(CARD_REGISTER_PAGE);
  };

  const cardList = getData("card");

  return { goToRegister, cardList };
};

export default useInitMainPage;
