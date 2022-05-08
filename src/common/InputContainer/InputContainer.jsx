import styled from 'styled-components';

export default function InputContainer({ children, width }) {
  return <Styled.InputContainer width={width}>{children}</Styled.InputContainer>;
}

const Styled = {
  InputContainer: styled.div`
    display: flex;
    width: ${({ width }) => width || '100%'};
    background-color: #ecebf1;
    border-radius: 0.25rem;
  `,
};
