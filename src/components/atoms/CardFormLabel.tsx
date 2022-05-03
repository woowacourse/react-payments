import React from 'react';

function CardFormLabel({ children }: { children: React.ReactNode }) {
  return (
    <>
      <label>{children}</label>
    </>
  );
}

export default CardFormLabel;
