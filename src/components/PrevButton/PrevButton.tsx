import styled from 'styled-components';

interface Props {
  onClick(): void;
}

export default function PrevButton({ onClick }: Props) {
  return <Styled.PrevButton onClick={onClick}>&#8249;</Styled.PrevButton>;
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
