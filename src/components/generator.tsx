import { width } from '../types/props';
import { NumbersState } from './CardNumberBox/CardNumberBox';
import { DateState } from './ExpirationDateInputBox/ExpirationDateInputBox';
import { Input } from './Input/Input.styled';
import { PasswordsState } from './PasswordBox/PasswordBox';

export const generateInputs = (
  state: NumbersState | DateState | PasswordsState,
  onChange: React.ChangeEventHandler,
  width: width,
  placeholder: string = ''
) => {
  // return Object.keys(state).map((key) => {
  //   return (
  //     <Input
  //       key={key}
  //       value={state[key]}
  //       onChange={onChange}
  //       width={width}
  //       type="text"
  //       name={key}
  //       placeholder={placeholder}
  //     />
  //   );
  // });
};
