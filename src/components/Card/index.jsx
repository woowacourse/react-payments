import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Card = ({ name, expiredDate, cardName, cardNumber }) => {
  return (
    <Container>
      <EmptyCard>
        <CardTop>
          <CardName>{cardName}의 카드</CardName>
        </CardTop>
        <CardMiddle>
          <CardChip />
          <CardNumbers>
            <span>{cardNumber.slice(0, 4).join("")}</span>
            <span>{cardNumber.slice(4, 8).join("")}</span>
            <span>••••</span>
            <span>••••</span>
          </CardNumbers>
        </CardMiddle>
        <CardBottom>
          <CardBottomInfo>
            <CardText>{name}</CardText>
            <CardText>{expiredDate}</CardText>
          </CardBottomInfo>
        </CardBottom>
      </EmptyCard>
    </Container>
  );
};

Card.propTypes = {
  cardName: PropTypes.string,
  name: PropTypes.string,
  expiredDate: PropTypes.string,
  CardNumber: PropTypes.array,
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

const CardText = styled.span`
  margin: 0 16px;

  font-size: 14px;
  line-height: 16px;
  vertical-align: middle;
  font-weight: 400;
`;

export default Card;
