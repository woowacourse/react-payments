import React from 'react';
import * as Style from './style';

const CardPasswordInput = (props) => {
  const handleChangeNumbers = (event) => {
    const currentValue = event.target.value;
    const index = Number(event.target.dataset.passwordIdx);

    if (isNaN(currentValue)) return;

    if (index === 1) {
      moveFocusToNextFragment();
    } else if (index === 2) {
      if (currentValue.length > 1) return;
    }

    setCardPassword((prevPassword) => ({ ...prevPassword, [index]: currentValue }));
  };
  return (
    <>
      <Style.Input type="password" width="12px" />
    </>
  );
};

export default CardPasswordInput;
