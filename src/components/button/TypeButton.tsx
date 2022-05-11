import React from 'react';
import styled from '@emotion/styled';

type CardInfo = {
  name: string;
  color: string;
};

type Props = {
  typeButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  cardInfo: CardInfo;
};

const Button = styled.button(({ cardInfo }: { cardInfo: CardInfo }) => ({
  width: '50px',
  height: '50px',
  border: 'none',
  borderRadius: '25px',
  cursor: 'pointer',
  marginBottom: '10px',
  backgroundColor: cardInfo.color,
}));

function TypeButton({ typeButtonClick, cardInfo }: Props) {
  return <Button id={cardInfo.name} onClick={typeButtonClick} cardInfo={cardInfo} />;
}

export default TypeButton;
