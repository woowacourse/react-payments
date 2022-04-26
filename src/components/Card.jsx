import React from 'react';
import styled from 'styled-components';

const SmallCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 208px;
  height: 130px;

  font-size: 30px;
  color: #575757;

  background: #e5e5e5;
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

const CardText = styled.span`
  margin: 0 16px;
  font-size: 14px;
  line-height: 16px;
  vertical-align: middle;
  font-weight: 400;
`;

const CardMiddle = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 30px;
  display: flex;
  align-items: center;
`;

const SmallCardChip = styled.div`
  width: 40px;
  height: 26px;
  left: 95px;
  top: 122px;

  background: #cbba64;
  border-radius: 4px;
`;

const CardBottom = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardBottomNumber = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardBottomInfo = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Card() {
  return (
    <SmallCard>
      <CardTop>
        <CardText>클린카드</CardText>
      </CardTop>
      <CardMiddle>
        <SmallCardChip></SmallCardChip>
      </CardMiddle>
      <CardBottom>
        <CardBottomNumber>
          <CardText>1111 - 2222 - oooo - oooo</CardText>
        </CardBottomNumber>
        <CardBottomInfo>
          <CardText>NAME</CardText>
          <CardText>MM / YY</CardText>
        </CardBottomInfo>
      </CardBottom>
    </SmallCard>
  );
}
