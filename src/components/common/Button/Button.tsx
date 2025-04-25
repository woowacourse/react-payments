import styled from '@emotion/styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customStyle: React.CSSProperties;
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button(props: ButtonProps) {
  return <ButtonWrapper {...props}>{props.text}</ButtonWrapper>;
}

export default Button;

const ButtonWrapper = styled.button<{ customStyle: React.CSSProperties }>`
  ${(props) => ({ ...props.customStyle })}
`;
