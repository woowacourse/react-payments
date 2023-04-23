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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (textType === 'number' && isNaN(Number(value))) return;

    setValue(value);

    if (!focus) return;
    if (value.length === length) focus(1);
    if (value.length === 0) focus(-1);
  };

  return (
    <StyledInput
      {...props}
      onChange={onChange}
      minLength={required ? length : 0}
      maxLength={length}
      ref={(el) => (insert ? insert(el) : el)}
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
