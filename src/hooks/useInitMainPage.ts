import { useNavigate } from "react-router-dom";
import { validateJson } from "validation";

const useInitMainPage = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    navigate("/register");
  };

  const cardList = getData("card");

  return { goToRegister, cardList };
};

const getData = (dataName: string) => {
  const dataInLocalStorage = Object.keys(localStorage).filter((key) =>
    key.startsWith(dataName)
  );

  return dataInLocalStorage.map((_, idx) => {
    const data = localStorage.getItem(`${dataName}${idx}`);

    if (!data) return [];

    return validateJson(data);
  });
};

export default useInitMainPage;
