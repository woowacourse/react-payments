import { useContext } from "react";
import { CardInfoContext } from "src/context/CardInfoContext";
import { BANK_LIST, CARD_ID } from "src/utils/constant";
import styled from "styled-components";

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
      <Styled.CardContainer>
        <img
          id={list.id}
          src={list.src}
          alt={list.name}
          onClick={cardClickHandler}
        />
        <p>{list.name}</p>
      </Styled.CardContainer>
    );
  });

  return <Styled.WholeCardContainer>{cardLists}</Styled.WholeCardContainer>;
}

export default CardCompany;

const Styled = {
  WholeCardContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  `,

  CardContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 0 0 0;

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: -0.085em;

      color: #525252;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  `,
};
