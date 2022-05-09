import React from 'react';
import CardPasswordInput from './CardPasswordInput';

type Props = {
  position: number;
  disabled?: boolean;
};

function CardPasswordInputContainer({ position, disabled = false }: Props) {
  return <CardPasswordInput position={position} disabled={disabled} />;
}
CardPasswordInputContainer.displayName = 'CardPasswordInputContainer';

export default CardPasswordInputContainer;
