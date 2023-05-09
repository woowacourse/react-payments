import { useContext } from "react";
import { CardInfoContext } from "src/context/CardInfoContext";

function useCardCompanySelect({ closeEvent }: { closeEvent: () => void }) {
  const [_, dispatch] = useContext(CardInfoContext);

  const changeCardColor = (id: string) => {
    if (dispatch) {
      dispatch({ type: "cardName", payload: id });
    }
  };

  const cardClickHandler: React.MouseEventHandler<HTMLImageElement> = (
    event,
  ) => {
    const { id } = event.currentTarget;
    changeCardColor(id);
    closeEvent();
  };

  const onMouseOver: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const image = event.currentTarget.childNodes[0] as HTMLImageElement;

    changeCardColor(image.id);
  };

  return { cardClickHandler, onMouseOver };
}

export default useCardCompanySelect;
