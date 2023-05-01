import styled from 'styled-components';

interface Props {
  width: string;
  children: React.ReactNode;
}

export function InputContainer({ children, width }: Props) {
  return <Style.InputContainer width={width}>{children}</Style.InputContainer>;
}

const Style = {
  InputContainer: styled.div<Props>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${(props) => `${props.width}`};
    height: 40px;

    border-radius: 7px;
    background-color: #ecebf1;

    &:focus {
      background-color: #75c4d2;
    }
  `,
};
