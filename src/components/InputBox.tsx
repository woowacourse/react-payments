import styled from 'styled-components';

type InputboxProps = {
  children?: JSX.Element | JSX.Element[];
  width?: number;
};

const InputBox = (props: InputboxProps) => {
  const { width, children } = props;

  return <StyledInputBox width={width} children={children}></StyledInputBox>;
};

export const StyledInputBox = styled.div<{ width?: number }>`
  display: flex;
  justify-content: center;
  height: 48px;
  margin-top: 12px;
  background: var(--input-background);
  border-radius: 8px;
  width: ${(props) => (props.width ? `${props.width}vw` : '100%')};
`;

export default InputBox;
