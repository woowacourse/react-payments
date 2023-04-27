import styled from 'styled-components';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  designType?: 'basic' | 'text';
  children?: React.ReactNode;
}

export function Button({ type = 'submit', designType = 'basic', children, ...props }: Props) {
  return (
    <Style.Button type={type} className={designType} {...props}>
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
    background-color: #1e77a8ac;

    font-size: 24px;
    font-weight: 600;
    color: white;

    cursor: pointer;

    &.text {
      color: black;
      font-weight: bold;
      background-color: transparent;
    }
  `,
};
