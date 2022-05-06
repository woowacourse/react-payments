import styled from 'styled-components';

import Button from 'components/common/Button';

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

// TODO: 성능 최적화 영상 찍으면서 비교해보기
function CardColorButton({ buttonBgColor, cardTitle, onClickFunc }) {
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

export default CardColorButton;
