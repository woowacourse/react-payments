import styled from 'styled-components';

type TextType = 'string' | 'number';
type TextAlign = 'left' | 'center';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  textType: TextType;
  value: string;
  setValue: (value: string) => void;
  length: number;
  textAlign?: TextAlign;
  textSecurity?: boolean;
  insert?: (element: HTMLInputElement | null) => void;
  focus?: (go: number) => void;
}

const Input = (props: Props) => {
  const { textType, setValue, length, required, insert, focus } = props;

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (textType === 'number' && isNaN(Number(target.value))) return;

    setValue(target.value);

    if (!focus) return;
    if (target.value.length === length) focus(1);
    if (target.value.length === 0) focus(-1);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { target, key } = e;
    if (!focus) return;
    if (!(target instanceof HTMLInputElement)) return;

    if (target.selectionStart === 0 && key === 'ArrowLeft') {
      focus(-1);
      e.preventDefault();
    }
    if (target.selectionStart === target.value.length && key === 'ArrowRight') {
      focus(1);
      e.preventDefault();
    }
  };

  return (
    <StyledInput
      {...props}
      onChange={onChange}
      onKeyDown={onKeyDown}
      minLength={required ? length : 0}
      maxLength={length}
      ref={insert}
    />
  );
};

export default Input;

const StyledInput = styled.input<Props>`
  width: ${({ length }) => length * 16}px;
  max-width: 100%;
  height: 16px;
  border: none;
  background-color: transparent;

  text-align: ${({ textAlign }) => textAlign || 'center'};
  font-size: 16px;
  color: #000000;
  outline: none;

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${({ textSecurity }) => textSecurity && '-webkit-text-security: disc'};
`;
