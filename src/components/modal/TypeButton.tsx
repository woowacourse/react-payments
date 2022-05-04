import React from 'react';

type CardInfo = {
  name: string;
  color: string;
};

type Props = {
  typeButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  cardInfo: CardInfo;
};

const Button = ({ typeButtonClick, cardInfo }: Props) => (
  <button
    id={cardInfo.name}
    onClick={typeButtonClick}
    css={{
      width: '50px',
      height: '50px',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      marginBottom: '10px',
      backgroundColor: cardInfo.color,
    }}
  />
);

function TypeButton({ typeButtonClick, cardInfo }: Props) {
  return <Button typeButtonClick={typeButtonClick} cardInfo={cardInfo} />;
}

export default TypeButton;
