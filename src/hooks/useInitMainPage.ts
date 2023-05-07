import { useNavigate } from "react-router-dom";
import { getData } from "utils/getDataFromLocalStorage";

const useInitMainPage = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    navigate("/register");
  };

  const cardList = getData("card");

  return { goToRegister, cardList };
};

export default useInitMainPage;
