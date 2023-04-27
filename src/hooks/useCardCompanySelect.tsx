import { useContext } from "react";
import { CardInfoContext } from "src/context/CardInfoContext";
import { CARD_ID } from "src/utils/constant";

function useCardCompanySelect({ closeEvent }: { closeEvent: () => void }) {
  const [_, setCardInfo] = useContext(CardInfoContext);

  const cardClickHandler = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    const { id, alt } = event.currentTarget;
    if (setCardInfo) {
      setCardInfo((prev) => ({
        ...prev,
        cardName: {
          id: id as (typeof CARD_ID)[number],
          name: alt,
        },
      }));

      closeEvent();
    }
  };

  return { cardClickHandler };
}

export default useCardCompanySelect;
