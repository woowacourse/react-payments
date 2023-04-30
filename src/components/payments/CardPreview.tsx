import styled from 'styled-components';
import { getUniqueID } from '../../utils/key';

type CardPreviewProps = {
  cardCompany: string;
  cardNumbers: string[];
  cardOwner: string[];
  cardExpirationDate: string[];
};

export const CARD_COMPANY_COLOR_MAP: Record<string, { main: string; secondary: string }> = {
  BC카드: { main: 'rgb(222, 84, 86)', secondary: 'white' },
  신한카드: { main: 'rgb(19, 74, 245)', secondary: 'white' },
  카카오뱅크: { main: 'rgb(251, 230, 77)', secondary: 'black' },
  현대카드: { main: 'rgb(51, 51, 51)', secondary: 'white' },
  우리카드: { main: 'rgb(187, 223, 245)', secondary: 'rgb(51, 122, 194)' },
  롯데카드: { main: 'rgb(240, 240, 240)', secondary: 'rgb(225, 0, 0)' },
  하나카드: { main: 'rgb(64, 146, 143)', secondary: 'white' },
  국민카드: { main: 'rgb(85, 79, 71)', secondary: 'rgb(247, 206, 71)' },
};

const CardPreview = ({
  cardCompany,
  cardNumbers,
  cardOwner,
  cardExpirationDate,
}: CardPreviewProps) => {
  const { main, secondary } = CARD_COMPANY_COLOR_MAP[cardCompany] || {
    main: '#8b8b8b',
    secondary: '#FFF',
  };

  return (
    <CardPreviewWrapper mainColor={main} secondaryColor={secondary}>
      <CardCompany>{cardCompany}</CardCompany>
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
                    <Dot key={getUniqueID()} secondaryColor={secondary} />
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

const CardPreviewWrapper = styled.div<{
  mainColor: string;
  secondaryColor: string;
}>`
  width: 212px;
  height: 132px;

  color: ${({ secondaryColor }) => secondaryColor};
  background-color: ${({ mainColor }) => mainColor};

  padding: 12px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const CardCompany = styled.div`
  height: 14px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;

const CardChip = styled.div`
  margin-top: 22px;
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

const Dot = styled.span<{
  secondaryColor: string;
}>`
  display: inline-block;
  background-color: ${({ secondaryColor }) => secondaryColor};
  width: 4px;
  height: 4px;
  border-radius: 50%;
`;

export default CardPreview;
