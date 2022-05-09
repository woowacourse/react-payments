import styled from 'styled-components';

import { Button } from 'components';

function CardKindButton({ buttonBgColor, cardTitle, onClickFunc }) {
  const setCardKind = () => {
    onClickFunc({ type: 'SET_CARD_COLOR', color: buttonBgColor });
    onClickFunc({ type: 'SET_CARD_TITLE', title: cardTitle });
  };

  return (
    <Styled.Root>
      <Button
        bgColor={buttonBgColor}
        shape="circle"
        onClickFunc={setCardKind}
      />
      <Styled.CardTitle>{cardTitle}</Styled.CardTitle>
    </Styled.Root>
  );
}

const Styled = {
  Root: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  `,

  CardTitle: styled.p`
    font-size: 13px;
  `,
};

export default CardKindButton;
