import React from 'react';

type CardInfo = {
  name: string;
  color: string;
};

type Props = {
  typeButtonClick: (event: React.MouseEvent<HTMLParagraphElement>) => void;
  cardInfo: CardInfo;
};

const Text = ({ typeButtonClick, cardInfo }: Props) => (
  <p
    id={cardInfo.name}
    onClick={typeButtonClick}
    css={{
      width: '60px',
      height: '40px',
      border: 'none',
      borderRadius: '25px',
      fontWeight: 600,
      cursor: 'pointer',
      color: cardInfo.color,
    }}
  >
    {cardInfo.name}
  </p>
);

function ButtonText({ typeButtonClick, cardInfo }: Props) {
  return <Text typeButtonClick={typeButtonClick} cardInfo={cardInfo} />;
}

export default ButtonText;
