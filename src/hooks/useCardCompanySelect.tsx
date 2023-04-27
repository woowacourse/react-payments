import { useContext } from "react";
import { CardInfoContext } from "src/context/CardInfoContext";
import { CARD_ID } from "src/utils/constant";

function useCardCompanySelect({ closeEvent }: { closeEvent: () => void }) {
  const [_, setCardInfo] = useContext(CardInfoContext);

  const changeCardColor = (id: (typeof CARD_ID)[number], name: string) => {
    if (setCardInfo) {
      setCardInfo((prev) => ({
        ...prev,
        cardName: {
          id,
          name,
        },
      }));
    }
  };

  const cardClickHandler: React.MouseEventHandler<HTMLImageElement> = (
    event,
  ) => {
    const { id, alt } = event.currentTarget;
    changeCardColor(id as (typeof CARD_ID)[number], alt);
    closeEvent();
  };

  const onMouseOver: React.MouseEventHandler<HTMLImageElement> = (event) => {
    const { id, alt } = event.currentTarget;
    changeCardColor(id as (typeof CARD_ID)[number], alt);
  };

  return { cardClickHandler, onMouseOver };
}

export default useCardCompanySelect;
