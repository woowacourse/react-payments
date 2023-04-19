import styled from 'styled-components';

type InputProps = {
  width?: number;
  center?: boolean;
  placeHolder?: string;
};

type StyledInputProps = {
  $width?: number;
  $center?: boolean;
};

const StyledInput = styled.input<StyledInputProps>`
  width: ${(props) => (props.$width ? `${props.$width * 10}px` : '100%')};
  padding: 12px;

  border: none;
  border-radius: 8px;
  background: #ecebf1;

  font-size: 18px;
  text-align: ${(props) => (props.$center ? 'center' : 'initial')};
`;

export const Input = (props: InputProps) => {
  const { width, center, placeHolder } = props;

  return <StyledInput $width={width} $center={center} placeholder={placeHolder} />;
};
