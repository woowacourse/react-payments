import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLOR_TYPE, COLOR_NAMES } from '../../constant';

const Card = ({
  name,
  ownerName,
  color = 'red',
  expiredMonth,
  expiredYear,
  firstCardNumber,
  secondCardNumber,
  thirdCardNumber,
  fourthCardNumber,
  onClick,
}) => {
  return (
    <Container onClick={onClick}>
      <EmptyCard color={color}>
        <CardTop>
          <CardName>{name}</CardName>
        </CardTop>
        <CardMiddle>
          <CardChip />
          <CardNumbers>
            {firstCardNumber && <span>{firstCardNumber}</span>}
            {secondCardNumber && <span>{secondCardNumber}</span>}
            {thirdCardNumber && (
              <span>
                {Array.from({ length: thirdCardNumber.length }).map(() => '•')}
              </span>
            )}
            {fourthCardNumber && (
              <span>
                {Array.from({ length: fourthCardNumber.length }).map(() => '•')}
              </span>
            )}
          </CardNumbers>
        </CardMiddle>
        <CardBottom>
          <CardBottomInfo>
            <CardOwnerContainer>{ownerName}</CardOwnerContainer>
            <CardExpiredDateContainer>
              {expiredMonth}
              {expiredYear && `/ ${expiredYear}`}
            </CardExpiredDateContainer>
          </CardBottomInfo>
        </CardBottom>
      </EmptyCard>
    </Container>
  );
};

Card.propTypes = {
  color: PropTypes.oneOf(COLOR_NAMES),
  name: PropTypes.string,
  ownerName: PropTypes.string,
  expiredMonth: PropTypes.string,
  expiredYear: PropTypes.string,
  firstCardNumber: PropTypes.string,
  secondCardNumber: PropTypes.string,
  thirdCardNumber: PropTypes.string,
  fourthCardNumber: PropTypes.string,
  onClick: PropTypes.func,
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px 0;
`;

const EmptyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 208px;
  height: 130px;

  font-size: 30px;
  color: #575757;

  background: ${({ color }) => COLOR_TYPE[color]};
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
  font-size: 16px;
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
}
`;

const CardNumbers = styled.div`
  display: flex;
  position: absolute;
  font-size: 16px;
  bottom: 30px;

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
  font-size: 14px;
  line-height: 16px;
  vertical-align: middle;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const CardExpiredDateContainer = styled.span`
  margin-right: 5px;
  width: 50px;
  font-size: 14px;
  line-height: 16px;
  vertical-align: middle;
  font-weight: 400;
`;

export default Card;
