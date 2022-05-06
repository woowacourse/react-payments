import styled from 'styled-components';

export default function PointerBox({ children, onClick }) {
  return <Styled.PointerBox onClick={onClick}>{children}</Styled.PointerBox>;
}

const Styled = {
  PointerBox: styled.span`
    cursor: pointer;
    max-width: 208px;
  `,
};
