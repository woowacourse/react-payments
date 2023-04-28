import styled from 'styled-components';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  designType?: 'basic' | 'text';
  backgroundColor?: string;
  children?: React.ReactNode;
}

export function Button({ designType = 'basic', backgroundColor, children, ...props }: Props) {
  return (
    <Style.Button className={designType} backgroundColor={backgroundColor} {...props}>
      {children}
    </Style.Button>
  );
}

const Style = {
  Button: styled.button<Props>`
    min-width: 300px;
    min-height: 100px;
    border: none;
    border-radius: 7px;
    outline: 0;
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : '#1e77a8ac')};

    color: ${(props) => (props.color ? props.color : 'white')};
    font-size: 24px;
    font-weight: 600;

    cursor: pointer;

    &.text {
      min-width: min-content;
      min-height: min-content;

      color: ${(props) => (props.color ? props.color : 'black')};
      font-size: 16px;
      font-weight: bold;
      background-color: transparent;
    }
  `,
};
