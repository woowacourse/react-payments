import React, { forwardRef } from 'react';
import { useAppDispatch, useAppState } from '../../../hooks/hooks';
import { useFormContext } from '../../../hooks/useForm/useFormContext';
import { isNum, transformNumToBullet } from '../../../utils';
import { createAction } from '../../Provider';
import CardPasswordInput from './CardPasswordInput';

type Props = {
  position: number;
  disabled?: boolean;
};

function CardPasswordInputContainer({ position, disabled = false }: Props) {
  const dispatch = useAppDispatch();
  const { register } = useFormContext();

  // const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = target;
  //   const lastChar = value.slice(-1);

  //   if (value.length > 1) return;

  //   if (value.length > 0) {
  //     if (!isNum(lastChar)) return;
  //     password[position] = lastChar;
  //     dispatch(createAction(ActionType.INPUT_PASSWORD, password));
  //     return;
  //   }

  //   password[position] = '';
  //   dispatch(createAction(ActionType.INPUT_PASSWORD, password));
  // };

  return <CardPasswordInput position={position} disabled={disabled} />;
}
CardPasswordInputContainer.displayName = 'CardPasswordInputContainer';

export default CardPasswordInputContainer;
