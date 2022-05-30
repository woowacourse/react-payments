import styled, { css } from 'styled-components';

import { memo } from 'react';

const getCardSize = (size: 'medium' | 'large') => {
  switch (size) {
    case 'medium':
      return {
        card: {
          height: '133px',
          padding: '19px',
          width: '213px',
        },
        title: {
          marginBottom: '33px',
          size: '13px',
        },
        magnet: {
          height: '26px',
          marginBottom: '15px',
          width: '40px',
        },
        numberSet: {
          marginBottom: '6px',
        },
        detail: {
          size: '17px',
          height: '22px',
        },
      };
    case 'large':
      return {
        card: {
          height: '150px',
          padding: '26px',
          width: '260px',
        },
        title: {
          marginBottom: '35px',
          size: '15px',
        },
        magnet: {
          height: '36px',
          marginBottom: '16px',
          width: '55px',
        },
        numberSet: {
          marginBottom: '6px',
        },
        detail: {
          size: '19px',
          height: '26px',
        },
      };
  }
};

const StyledCard = styled.div`
  box-shadow: 3px 3px 5px #00000040;
  border-radius: 5px;
  cursor: pointer;

  ${({
    bgColor,
    cardStyle: { height, padding, width },
  }: {
    bgColor: string;
    cardStyle: { height: string; padding: string; width: string };
  }) => css`
    background: ${bgColor};
    height: ${height};
    padding: ${padding};
    width: ${width};
  `};
`;

const Title = styled.div`
  color: #383838;

  ${({
    cardStyle: { marginBottom, size },
  }: {
    cardStyle: { marginBottom: string; size: string };
  }) => css`
    font-size: ${size};
    height: ${size};
    margin-bottom: ${marginBottom};
  `}
`;

const Magnet = styled.div`
  background: #cbba64;
  border-radius: 4px;

  ${({
    cardStyle: { height, marginBottom, width },
  }: {
    cardStyle: { height: string; marginBottom: string; width: string };
  }) => css`
    height: ${height};
    margin-bottom: ${marginBottom};
    width: ${width};
  `}
`;

const NumberSet = styled.div`
  color: #525252;
  font-weight: bold;
  text-align: center;

  ${({
    cardStyle: {
      numberSet: { marginBottom },
      detail: { size, height },
    },
  }: {
    cardStyle: {
      numberSet: { marginBottom: string };
      detail: { size: string; height: string };
    };
  }) => css`
    font-size: ${size};
    height: ${height};
    margin-bottom: ${marginBottom};
  `}
`;

const OwnerName = styled.span`
  color: #525252;
  display: inline-block;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-all;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  width: 50%;

  ${({
    cardStyle: { size, height },
  }: {
    cardStyle: { size: string; height: string };
  }) => css`
    font-size: ${size};
    height: ${height};
  `}
`;

const ValidDate = styled.span`
  color: #525252;
  float: right;
  font-weight: bold;

  ${({
    cardStyle: { size, height },
  }: {
    cardStyle: { size: string; height: string };
  }) => css`
    font-size: ${size};
    height: ${height};
  `}
`;

type Props = {
  bgColor: string;
  className?: string;
  company: string;
  name: string;
  number: string;
  size: 'medium' | 'large';
  validDate: string;
  onClickFunc?: (e: React.MouseEvent<HTMLElement>) => void;
};

function Card({
  bgColor,
  className,
  company,
  name = 'NAME',
  number = '',
  size = 'medium',
  validDate = 'MM/YY',
  onClickFunc,
}: Props) {
  const { card, title, magnet, numberSet, detail } = getCardSize(size);

  return (
    <StyledCard
      className={className}
      bgColor={bgColor}
      cardStyle={card}
      onClick={onClickFunc}
    >
      <Title cardStyle={title}>{company}</Title>
      <Magnet cardStyle={magnet} />
      <div>
        <NumberSet cardStyle={{ numberSet, detail }}>{number}</NumberSet>
        <OwnerName cardStyle={detail}>{name}</OwnerName>
        <ValidDate cardStyle={detail}>{validDate}</ValidDate>
      </div>
    </StyledCard>
  );
}

export default memo(Card);
