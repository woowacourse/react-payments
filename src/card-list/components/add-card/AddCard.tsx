import React from 'react';
import S from '../../styled';

function AddCard() {
  const handleClick = () => {
    console.log('add card is clicked');
  };
  return <S.AddCard onClick={handleClick} />;
}

export default AddCard;
