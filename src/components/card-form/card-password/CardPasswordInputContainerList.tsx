import React from 'react';
import CardPasswordInputContainer from './CardPasswordInputContainer';

function CardPasswordInputContainerList() {
  return (
    <div className="d-flex">
      <CardPasswordInputContainer position={1} />
      <CardPasswordInputContainer position={2} />
      <CardPasswordInputContainer position={3} disabled />
      <CardPasswordInputContainer position={4} disabled />
    </div>
  );
}

export default CardPasswordInputContainerList;
