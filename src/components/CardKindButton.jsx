import styled from 'styled-components';

import { Button } from 'components';

// TODO: 성능 최적화 영상 찍으면서 비교해보기
// TODO: 컴포넌트 네이밍 다시하기
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
