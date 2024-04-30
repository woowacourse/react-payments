import { COLOR } from '../styles/color';
import styled from '@emotion/styled';

export interface TextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  borderColor?: 'normal' | 'error';
}

const borderColors = { normal: COLOR.gray1, error: COLOR.error };

const TextInput = styled.input((props: TextInputProps) => ({
  width: '40px',
  border: '1px solid',
  borderRadius: '2px',
  padding: '8px',
  outline: 'none',
  borderColor: props.borderColor
    ? borderColors[props.borderColor] + ' !important'
    : COLOR.gray1,

  '&::placeholder': {
    color: COLOR.gray1,
  },
  '&:focus': {
    border: `1px solid ${COLOR.black}`,
  },
}));

export default TextInput;
