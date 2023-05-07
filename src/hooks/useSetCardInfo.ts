import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { CardInfoContext } from "../components/provider/CardInfoProvider";
import { setData } from "utils/setDataInLocalStorage";

const useSetCardInfo = () => {
  const { cardInfo } = useContext(CardInfoContext);

  const navigate = useNavigate();

  useEffect(() => {
    const registeringCard = setTimeout(() => {
      setData(cardInfo, "card");

      navigate("/");
    }, 3000);

    return () => clearTimeout(registeringCard);
  }, [cardInfo, navigate]);
};

export default useSetCardInfo;
