import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  designType?: 'basic';
  message?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  children?: ReactNode;
}

export function Tooltip({ designType = 'basic', message, children, ...props }: Props) {
  return (
    <Style.Container>
      <Style.Button type='button' aria-label='Tooltip' role='tooltip'>
        ?<Style.Content className='tooltipText'>{message}</Style.Content>
      </Style.Button>
    </Style.Container>
  );
}

const Style = {
  Container: styled.div<Props>`
    @keyframes visible {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,

  Button: styled.button<Props>`
    display: block;

    width: ${(props) => (props.width ? props.width : '20px')};
    height: ${(props) => (props.height ? props.height : '20px')};

    position: relative;
    border: 1px solid #bababa;
    border-radius: 50%;
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'white')};

    color: ${(props) => (props.color ? props.color : '#949494')};

    cursor: pointer;

    &:hover > .tooltipText,
    &:active > .tooltipText {
      display: block;
      animation: visible 1s;
    }
  `,

  Content: styled.div<Props>`
    display: none;

    width: 100px;
    height: ${(props) => (props.height ? props.height : 'fit-content')};

    position: absolute;
    top: 50%;
    left: 150%;
    transform: translateY(-50%);
    border: 1px solid #bababa;
    border-radius: 7px;
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'white')};
    padding: 5px;

    font-size: 10px;
    text-align: justify;
    color: ${(props) => (props.color ? props.color : '#949494')};

    z-index: 100;
  `,
};
