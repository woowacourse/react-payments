import styled from "styled-components";
import { memo, useContext } from "react";

import ColorBox from "component/common/ColorBox/ColorBox.component";

import { cardInfos } from "constants";
import { CardTypeContext } from "provider/CardTypeProvider";

const ColorTypeSelectorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 25px;
`;

const CardTypeSelector = memo(() => {
  const {
    state: { cardTypeInfo },
    action: { onClickCardType },
  } = useContext(CardTypeContext);

  return (
    <ColorTypeSelectorContainer>
      {cardInfos.map(({ cardName, cardType }, idx) => (
        <ColorBox
          cardName={cardName}
          cardType={cardType}
          currentCardType={cardTypeInfo.cardType}
          key={idx}
          onClickCardType={onClickCardType}
        />
      ))}
    </ColorTypeSelectorContainer>
  );
});

export default CardTypeSelector;
