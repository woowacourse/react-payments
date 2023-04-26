import styled from 'styled-components';

interface InputWrapperProps {
  children: React.ReactNode;
  width: number;
}

export function InputWrapper({ children, width }: InputWrapperProps) {
  return <Style.Wrapper style={{ width }}>{children}</Style.Wrapper>;
}

const Style = {
  Wrapper: styled.div`
    height: 49px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 7px;
    background-color: #ecebf1;
  `,
};
