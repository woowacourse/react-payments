import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customStyle: SerializedStyles;
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button(props: ButtonProps) {
  return (
    <ButtonWrapper css={props.customStyle} {...props}>
      {props.text}
    </ButtonWrapper>
  );
}

export default Button;

const ButtonWrapper = styled.button<{ css: SerializedStyles }>`
  ${(props) => ({ ...props.css })}
`;
