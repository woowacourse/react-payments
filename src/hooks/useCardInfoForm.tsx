import { PATH } from "constant/path";
import { CardInfoContext } from "contexts/CardInfoProvider";
import { CardsContext } from "contexts/CardsProvider";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isCardInfo } from "types/cardInfo";

function useCardInfoForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cardInfo, pullCardInfo, resetCardInfo } = useContext(CardInfoContext);
  const { addCard, editCard } = useContext(CardsContext);

  useEffect(() => {
    if (location.state) {
      if (!isCardInfo(location.state)) return;
      const clickedCardInfo = location.state;

      pullCardInfo(clickedCardInfo);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cardInfo.id) {
      await editCard(cardInfo.id);
    } else {
      await addCard(cardInfo);
    }

    resetCardInfo();
    navigate(PATH.HOME);
  };

  return {
    handleSubmit,
  };
}

export default useCardInfoForm;
