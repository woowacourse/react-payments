import React from 'react';
import styled from 'styled-components';

type CardPreviewProps = {
  cardNumbers: string[];
  cardOwner: string[];
  cardExpirationDate: string[];
};

const CardPreview = ({ cardNumbers, cardOwner, cardExpirationDate }: CardPreviewProps) => {
  return (
    <CardPreviewWrapper>
      <CardChip />
      <CardNumberWrapper>
        {cardNumbers.map((cardNumber, index) => {
          if (index < 2) {
            return (
              <CardNumber key={index}>
                <div>{cardNumber}</div>
              </CardNumber>
            );
          } else {
            return (
              <CardNumber key={index}>
                {Array(cardNumber.length)
                  .fill(0)
                  .map(() => (
                    <Dot />
                  ))}
              </CardNumber>
            );
          }
        })}
      </CardNumberWrapper>
      <CardInfo>
        <div>{cardOwner[0]}</div>
        <div>
          <span>{cardExpirationDate[0]}</span>/<span>{cardExpirationDate[1]}</span>
        </div>
      </CardInfo>
    </CardPreviewWrapper>
  );
};

const CardPreviewWrapper = styled.div`
  color: #fff;

  width: 212px;
  height: 132px;
  background-color: #333;
  padding: 12px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const CardChip = styled.div`
  margin-top: 40px;
  width: 40px;
  height: 24px;
  background-color: #cbba64;
  border-radius: 4px;
`;

const CardNumberWrapper = styled.ul`
  display: flex;
  margin-top: 12px;
  margin-left: 4px;
  letter-spacing: 1px;
  font-size: 14px;
  height: 20px;
  column-gap: 12px;
`;

const CardNumber = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 1.6;

  width: 36px;
  column-gap: 4px;
`;

const CardInfo = styled.div`
  margin-top: 4px;

  font-size: 12px;

  display: flex;
  justify-content: space-between;
  margin-left: 4px;
  margin-right: 6px;
`;

const Dot = styled.span`
  display: inline-block;
  background-color: #fff;
  width: 4px;
  height: 4px;
  border-radius: 50%;
`;

export default CardPreview;
