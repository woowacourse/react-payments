import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

interface PreviewProps {
  cardNumbers: string[];
  period: string[];
  separatorRef?: React.RefObject<HTMLDivElement | null>;
}

const Preview: React.FC<PreviewProps> = ({
  cardNumbers,
  period,
  separatorRef,
}) => {
  const [cardMethodSrc, setCardMethodSrc] = useState<string>('');
  const cardMethodRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (cardNumbers[0].startsWith('4')) {
      setCardMethodSrc('/images/visa.svg');
      cardMethodRef.current!.style.display = 'block';
    } else if (
      Number(cardNumbers[0].slice(0, 2)) >= 51 &&
      Number(cardNumbers[0].slice(0, 2)) <= 55
    ) {
      setCardMethodSrc('/images/Mastercard.svg');
      cardMethodRef.current!.style.display = 'block';
    } else {
      setCardMethodSrc('');
      cardMethodRef.current!.style.display = 'none';
    }
  }, [cardNumbers]);

  return (
    <PreviewContainer data-testid="preview-component">
      <CardFrame>
        <ICChip></ICChip>
        <CardMethod src={cardMethodSrc} ref={cardMethodRef} />
        <CardNumberArea>
          {cardNumbers.map((number, index) => (
            <CardNumber key={index}>
              {index < 2 ? number : '∙'.repeat(number.length)}
            </CardNumber>
          ))}
        </CardNumberArea>
        <CardPeriodArea>
          <CardPeriod>{period[0]}</CardPeriod>
          <Separator ref={separatorRef}></Separator>
          <CardPeriod>{period[1]}</CardPeriod>
        </CardPeriodArea>
      </CardFrame>
    </PreviewContainer>
  );
};

export default Preview;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 34px 0 45px;
`;

const CardFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background-color: #333333;
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
  font-family: 'Inter';
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
  font-family: 'Inter';
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  vertical-align: middle;
  color: #ffffff;
`;

const Separator = styled.span`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  vertical-align: middle;
  color: #ffffff;
`;

const CardMethod = styled.img`
  display: none;
  width: 36px;
  height: 22px;
  position: absolute;
  top: 8px;
  right: 12px;
`;
