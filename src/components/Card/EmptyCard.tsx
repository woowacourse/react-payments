import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ColorType } from 'constant/index';

const CardScaleType = {
  small: {
    width: '208',
    height: '130',
    fontSize: '16',
  },
  large: {
    width: '293',
    height: '183',
    fontSize: '18',
  },
};

const EmptyCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: ${(props) => CardScaleType[props.size].width}px;
  height: ${(props) => CardScaleType[props.size].height}px;

  font-size: 30px;
  color: #575757;

  background: ${(props) => ColorType[props.color]};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  user-select: none;
`;

const CardTop = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

const CardName = styled.span`
  font-size: ${(props) => CardScaleType[props.size].fontSize}px;
  margin-left: 14px;
`;

const CardMiddle = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 30px;

  display: flex;
  align-items: center;
`;

const CardChip = styled.div`
  width: 40px;
  height: 26px;
  left: 95px;
  top: 100px;

  background: #cbba64;
  border-radius: 4px;
`;

const CardNumbersBox = styled.div`
  display: flex;
  position: absolute;
  font-size: ${(props) => CardScaleType[props.size].fontSize}px;
  bottom: 33px;

  & > span {
    margin-right: 10px;
  }

  &::last-child {
    margin-right: 0;
  }
`;

const CardBottom = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardBottomInfo = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardOwnerContainer = styled.span`
  width: 160px;
  margin: 0 16px;
  padding-top: 10px;
  font-size: ${(props) => CardScaleType[props.size].fontSize}px;
  line-height: 16px;
  vertical-align: middle;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const CardExpiredDateContainer = styled.span`
  position: absolute;
  top: 14px;
  right: 10px;
  width: fit-content;
  font-size: ${(props) => CardScaleType[props.size].fontSize}px;
  line-height: 16px;
  vertical-align: middle;
  font-weight: 400;
`;

type EmptyCardProps = {
  name: string;
  cardType: {
    name: string;
    color: string;
  };
  expiredMonth: string;
  expiredYear: string;
  cardNumbers: Array<string>;
  size: string;
};

const EmptyCard = ({
  name,
  cardType,
  expiredMonth,
  expiredYear,
  cardNumbers,
  size,
}: EmptyCardProps) => {
  return (
    <EmptyCardWrapper color={cardType.color} size={size}>
      <CardTop>
        <CardName size={size}>{cardType.name}</CardName>
      </CardTop>
      <CardMiddle>
        <CardChip />
        <CardNumbersBox size={size}>
          {cardNumbers[0] && <span>{cardNumbers[0]}</span>}
          {cardNumbers[1] && <span>{cardNumbers[1]}</span>}
          {cardNumbers[2] && (
            <span>{Array.from({ length: cardNumbers[2].length }).map((_, index) => '•')}</span>
          )}
          {cardNumbers[3] && (
            <span>{Array.from({ length: cardNumbers[3].length }).map((_, index) => '•')}</span>
          )}
        </CardNumbersBox>
      </CardMiddle>
      <CardBottom>
        <CardBottomInfo>
          <CardOwnerContainer size={size}>{name}</CardOwnerContainer>
          <CardExpiredDateContainer size={size}>
            {expiredMonth}
            {expiredYear && `/ ${expiredYear}`}
          </CardExpiredDateContainer>
        </CardBottomInfo>
      </CardBottom>
    </EmptyCardWrapper>
  );
};

EmptyCard.propTypes = {
  name: PropTypes.string,
  cardType: PropTypes.object,
  expiredMonth: PropTypes.string,
  expiredYear: PropTypes.string,
  cardNumbers: PropTypes.array,
  size: PropTypes.string,
};

export default EmptyCard;
