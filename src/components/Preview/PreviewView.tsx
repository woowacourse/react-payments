import React from 'react';
import styled from '@emotion/styled';

type CardNumber = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

export interface PreviewViewProps {
  cardNumbers: CardNumber;
  period: { month: string; year: string };
  separatorRef?: React.RefObject<HTMLDivElement | null>;
  cardMethodSrc: string;
  cardFrameColor: string;
}

const CARD_NUMBER_VISIBLE_THRESHOLD = 2;

const PreviewView = ({
  cardNumbers,
  period,
  separatorRef,
  cardMethodSrc,
  cardFrameColor,
}: PreviewViewProps) => {
  return (
    <PreviewContainer data-testid='preview-component'>
      <CardFrame cardFrameColor={cardFrameColor}>
        <ICChip />
        {cardMethodSrc && (
          <CardMethod
            src={cardMethodSrc}
            style={{ display: cardMethodSrc ? 'block' : 'none' }}
            data-testid='card-method'
            alt='Card Method'
          />
        )}
        <CardNumberArea>
          {Object.values(cardNumbers).map((number, index) => (
            <CardNumber key={index}>
              {index < CARD_NUMBER_VISIBLE_THRESHOLD
                ? number
                : '∙'.repeat(number.length)}
            </CardNumber>
          ))}
        </CardNumberArea>
        <CardPeriodArea>
          <CardPeriod>{period.month}</CardPeriod>
          <Separator ref={separatorRef} />
          <CardPeriod>{period.year}</CardPeriod>
        </CardPeriodArea>
      </CardFrame>
    </PreviewContainer>
  );
};

export default PreviewView;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 34px 0 45px;
`;

const CardFrame = styled.div<{ cardFrameColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background-color: ${({ cardFrameColor }) => cardFrameColor};
  box-shadow: 3px 3px 5px 0px #00000040;
  position: relative;
`;

const ICChip = styled.div`
  width: 36px;
  height: 22px;
  background-color: #ddcd78;
  border-radius: 3px;
  position: absolute;
  top: 8px;
  left: 12px;
`;

const CardNumberArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  position: absolute;
  top: 44px;
`;

const CardNumber = styled.span`
  width: 38px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  vertical-align: middle;
  color: #ffffff;
`;

const CardPeriodArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 72px;
  left: 15px;
`;

const CardPeriod = styled.span`
  width: 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  vertical-align: middle;
  color: #ffffff;
`;

const Separator = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  vertical-align: middle;
  color: #ffffff;
`;

const CardMethod = styled.img`
  width: 36px;
  height: 22px;
  position: absolute;
  top: 8px;
  right: 12px;
`;
