import styled from "styled-components";
import useCardInfoContext from "../../hooks/useCardInfoContext";
import { setCardTypeComplete } from "../../providers/CardInfoCompleteProvider";
import { setCardType } from "../../providers/CardInfoProvider";

export const CardSelectModal = ({ cardTypes, closeModal }) => {
  const { infoDispatch, completeDispatch } = useCardInfoContext();

  const handleCardTypeSelect = (cardType) => {
    const { name, color } = cardType;

    infoDispatch(setCardType(name, color));
    completeDispatch(setCardTypeComplete(true));
    closeModal();
  };

  return (
    <GridColumnsStyle col={4}>
      {cardTypes.map((card) => (
        <ModalItemContainerStyle
          key={card.name}
          onClick={() => handleCardTypeSelect(card)}
        >
          <ModalItemDotStyle backgroundColor={card.color} />
          <ModalItemNameStyle>{card.name} 카드</ModalItemNameStyle>
        </ModalItemContainerStyle>
      ))}
    </GridColumnsStyle>
  );
};

const GridColumnsStyle = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;
const ModalItemContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ModalItemDotStyle = styled.div`
  margin: 0.5rem 1rem;
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;
  background-color: ${(props) => props.backgroundColor || "#94daca"};
  cursor: pointer;
`;
const ModalItemNameStyle = styled.span`
  font-size: 12px;
  letter-spacing: -0.085rem;
  cursor: pointer;
`;
