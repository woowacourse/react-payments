import { PATH } from "constant/path";
import { CardInfoContext } from "contexts/CardInfoProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardInfo } from "types/cardInfo";

function useCardInfoForm(
  cardInfo: CardInfo,
  addCard: (cardInfo: CardInfo) => void,
  editCard: (id: number, partialCardInfo: Partial<CardInfo>) => void
) {
  const navigate = useNavigate();

  const requestPattern = {
    add: {
      requestFunction: addCard as any,
      requestBody: [cardInfo] as any,
    },
    edit: {
      requestFunction: editCard,
      requestBody: [cardInfo.id, { cardName: cardInfo.cardName }],
    },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { requestFunction, requestBody } = requestPattern[cardInfo.id ? "edit" : "add"];

    await requestFunction(...requestBody);

    navigate(PATH.HOME);
  };

  return handleSubmit;
}

export default useCardInfoForm;
