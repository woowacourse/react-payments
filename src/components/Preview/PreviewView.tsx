import styled from '@emotion/styled';

interface PreviewViewProps {
  numbers: string[];
  period: string[];
  cardBrandColor: string;
  isPeriodSeparatorShowing: boolean;
  cardMethodSrc: string | null;
}

const NUMBER_VISIBLE_THRESHOLD = 2;
const SEPARATOR = '/';

const PreviewView = ({
  numbers,
  period,
  cardBrandColor,
  isPeriodSeparatorShowing,
  cardMethodSrc,
}: PreviewViewProps) => {
  return (
    <PreviewContainer data-testid="preview-component">
      <CardFrame backgroundColor={cardBrandColor}>
        <ICChip />
        {cardMethodSrc && (
          <CardBrand
            src={cardMethodSrc}
            data-testid="card-method"
            alt="Card Method"
          />
        )}
        <CardNumberArea>
          {numbers.map((number, index) => (
            <CardNumber key={index}>
              {index < NUMBER_VISIBLE_THRESHOLD
                ? number
                : '•'.repeat(number.length)}
            </CardNumber>
          ))}
        </CardNumberArea>
        <CardPeriodArea>
          <CardPeriod>{period[0]}</CardPeriod>
          {isPeriodSeparatorShowing && <Separator>{SEPARATOR}</Separator>}
          <CardPeriod>{period[1]}</CardPeriod>
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

const CardFrame = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: 3px 3px 5px 0px #00000040;
  position: relative;
`;

const ICChip = styled.div`
  width: 36px;
  height: 22px;
  background-color: ${({ theme }) => theme.colors.ICChip};
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
  font-family: ${({ theme }) => theme.fonts.inter};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.cardInfo};
  line-height: 20px;
  letter-spacing: 2px;
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.cardText};
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
  font-family: ${({ theme }) => theme.fonts.inter};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.cardInfo};
  line-height: 20px;
  letter-spacing: 2px;
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.cardText};
`;

const Separator = styled.span`
  width: 10px;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.cardInfo};
  line-height: 20px;
  vertical-align: middle;
  text-align: center;
  color: ${({ theme }) => theme.colors.cardText};
`;

const CardBrand = styled.img`
  width: 36px;
  height: 22px;
  position: absolute;
  top: 8px;
  right: 12px;
`;
