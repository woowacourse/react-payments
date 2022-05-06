import styled from 'styled-components';

export default function PrevButton({ children, onClick }) {
  return <Styled.PrevButton onClick={onClick}>{children}</Styled.PrevButton>;
}

const Styled = {
  PrevButton: styled.span`
    font-size: 50px;

    cursor: pointer;
    line-height: 10px;
    margin-right: 17px;
    &:hover {
    }
  `,
};
