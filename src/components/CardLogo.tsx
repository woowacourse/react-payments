import styled from "styled-components";
import { CARD_COMPANYS } from "../constant";
import { useCardAction } from "../context/CardContext";
import useDrawer from "../hooks/useDrawer";

interface CardLogoProps {
  cardName: string;
}

const Wrapper = styled.div`
  width: 52px;
  height: 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 37px;
  height: 37px;
`;

const CardTitle = styled.p`
  font-size: 12px;
`;

export default function CardLogo({ cardName }: CardLogoProps) {
  const { closeDrawer } = useDrawer();

  const cardAction = useCardAction();
  const setSelectedCard = () => {
    cardAction({
      type: "SET_CARD_COLOR",
      color: CARD_COMPANYS[cardName].backgroundColor,
    });
    cardAction({
      type: "SET_CARD_TITLE",
      title: cardName,
    });
    closeDrawer();
  };
  return (
    <Wrapper onClick={setSelectedCard}>
      <Image src={CARD_COMPANYS[cardName].src} />
      <CardTitle>{CARD_COMPANYS[cardName].title}</CardTitle>
    </Wrapper>
  );
}
