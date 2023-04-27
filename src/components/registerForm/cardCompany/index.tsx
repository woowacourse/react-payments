import { useContext } from "react";
import { CardInfoContext } from "src/context/CardInfoContext";
import { BANK_LIST, CARD_ID } from "src/utils/constant";
import { Styled as S } from "./CardCompany.styles";

interface Props {
  closeEvent: () => void;
}

function CardCompany({ closeEvent }: Props) {
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

  const cardLists = BANK_LIST.map((list) => {
    return (
      <S.CardContainer>
        <img
          id={list.id}
          src={list.src}
          alt={list.name}
          onClick={cardClickHandler}
        />
        <p>{list.name}</p>
      </S.CardContainer>
    );
  });

  return <S.WholeCardContainer>{cardLists}</S.WholeCardContainer>;
}

export default CardCompany;
