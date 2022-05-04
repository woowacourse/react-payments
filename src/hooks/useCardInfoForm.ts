import { PATH } from "constant/path";
import { CardInfoContext } from "contexts/CardInfoProvider";
import { CardsContext } from "contexts/CardsProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function useCardInfoForm() {
  const navigate = useNavigate();
  const { cardInfo, resetCardInfo } = useContext(CardInfoContext);
  const { addCard, editCard } = useContext(CardsContext);

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
