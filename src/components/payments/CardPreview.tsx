import styled from 'styled-components';
import { getUniqueID } from '../../utils/key';
import { CARD_COMPANY_COLOR_MAP } from '../../constants/cardCompany';

type CardPreviewProps = {
  cardCompany: string;
  cardNumbers: { first: string; second: string; third: string; fourth: string };
  cardOwner: string;
  cardExpirationDate: { month: string; year: string };
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
      <SCardCompany>{cardCompany === '' ? '카드사 선택하기' : cardCompany}</SCardCompany>
      <CardChip />
      <CardNumberWrapper>
        <CardNumber>
          <div>{cardNumbers.first}</div>
        </CardNumber>
        <CardNumber>
          <div>{cardNumbers.second}</div>
        </CardNumber>
        <CardNumber>
          {Array(cardNumbers.third.length)
            .fill(0)
            .map(() => (
              <Dot key={getUniqueID()} secondaryColor={secondary} />
            ))}
        </CardNumber>
        <CardNumber>
          {Array(cardNumbers.fourth.length)
            .fill(0)
            .map(() => (
              <Dot key={getUniqueID()} secondaryColor={secondary} />
            ))}
        </CardNumber>
      </CardNumberWrapper>
      <CardInfo>
        <div>{cardOwner}</div>
        <div>
          <span>{cardExpirationDate.month}</span>/<span>{cardExpirationDate.year}</span>
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

const SCardCompany = styled.div`
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
