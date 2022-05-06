import styled from 'styled-components';

export default function InputBox({ children }) {
  return <Styled.InputBox>{children}</Styled.InputBox>;
}

const Styled = {
  InputBox: styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.375rem;
    color: #d3d3d3;
  `,
};
