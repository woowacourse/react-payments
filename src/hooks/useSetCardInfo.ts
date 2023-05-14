import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { CardInfoContext } from "../components/provider/CardInfoProvider";
import { setData } from "utils/setDataInLocalStorage";
import { MAIN_PAGE } from "constants/path";

const useSetCardInfo = () => {
  const { cardInfo } = useContext(CardInfoContext);

  const navigate = useNavigate();

  useEffect(() => {
    const registeringCard = setTimeout(() => {
      setData(cardInfo, "card");

      navigate(MAIN_PAGE);
    }, 3000);

    return () => clearTimeout(registeringCard);
  }, [cardInfo, navigate]);
};

export default useSetCardInfo;
