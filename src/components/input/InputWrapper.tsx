import styled from 'styled-components';

interface InputWrapperProps {
  children: React.ReactNode;
  width: number;
}

export function InputWrapper({ children, width }: InputWrapperProps) {
  return <Style.Wrapper width={width}>{children}</Style.Wrapper>;
}

const Style = {
  Wrapper: styled.div<{ width: number }>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${(props) => `${props.width}px`};
    height: 49px;

    border-radius: 7px;
    background-color: #ecebf1;
  `,
};
