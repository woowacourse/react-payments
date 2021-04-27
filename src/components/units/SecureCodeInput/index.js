import React from 'react';
import * as Style from './style';


  const isOverLength = (value) => value.length > 3;

  const handleChangeNumbers = (event) => {
    const currentValue = event.target.value;
    if (isNaN(currentValue)) return;
    if (isOverLength(currentValue)) return;

    setSecureCode(currentValue);
  };
  return (
    <>
      <Style.Input type="password" width="36px" />
    </>
  );
};

export default SecureCodeInput;
