import React from 'react';
import styled from 'styled-components';

const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px 0;
`;
const SmallCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 208px;
  height: 130px;

  background: #94dacd;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;
const SmallCard_chip = styled.div`
  width: 40px;
  height: 26px;
  left: 95px;
  top: 122px;

  background: #cbba64;
  border-radius: 4px;
`;
const CardTop = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;
const CardMiddle = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 30px;

  display: flex;
  align-items: center;
`;
const CardBottom = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardBottom__number = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardBottom__info = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CardText = styled.span`
  margin: 0 16px;

  font-size: 14px;
  line-height: 16px;
  vertical-align: middle;
  font-weight: 400;
`;

export const Card = ({ type }) => {
  return (
    <CardBox>
      <SmallCard>
        <CardTop>
          <CardText>클린카드</CardText>
        </CardTop>
        <CardMiddle>
          <SmallCard_chip></SmallCard_chip>
        </CardMiddle>
        <CardBottom>
          <CardBottom__number>
            <CardText>1111 - 2222 - oooo - oooo</CardText>
          </CardBottom__number>
          <CardBottom__info>
            <CardText>YOU SE JI</CardText>
            <CardText>12 / 23</CardText>
          </CardBottom__info>
        </CardBottom>
      </SmallCard>
    </CardBox>
  );
};
