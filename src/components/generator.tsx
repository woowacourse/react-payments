import { width } from '../types/props';
import { NumbersState } from './CardNumberBox/CardNumberBox';
import { DateState } from './ExpirationDateInputBox/ExpirationDateInputBox';
import { Input } from './Input/Input.styled';

export const generateInputs = (
  state: NumbersState | DateState,
  onChange: React.ChangeEventHandler,
  width: width,
  placeholder: string = ''
) => {
  return Object.keys(state).map((key) => (
    <Input
      key={key}
      name={key}
      value={state[key]}
      onChange={onChange}
      placeholder={placeholder}
      width={width}
      type="text"
    />
  ));
};
