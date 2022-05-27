import { PropsWithChildren } from 'react';
import Circle from 'components/Circle/Circle';
import styled from 'styled-components';
import { CardColor } from 'types/cardInfo';

interface Props {
  color: CardColor;
  onClick(): void;
  selected: boolean;
}

export default function CardCompany({
  color,
  children,
  onClick,
  selected,
}: PropsWithChildren<Props>) {
  return (
    <Styled.CardCompanyBox onClick={onClick}>
      <Circle size="37px" color={color} />
      <Styled.CardCompanyName selected={selected}>{children}</Styled.CardCompanyName>
    </Styled.CardCompanyBox>
  );
}

const Styled = {
  CardCompanyBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 15px;
    height: 105px;
    cursor: pointer;
  `,

  CardCompanyName: styled.p<{ selected: boolean }>`
    margin: 10px 0;
    color: ${({ selected }) => (selected ? '#000' : '#5e5e5e')};
    font-size: 12px;
    letter-spacing: -0.085rem;
  `,
};
