import styled from '@emotion/styled';
import { CardCompanyColor } from '../../hooks/useCardCompany';

interface CardPreviewProps {
  cardNumber: string[];
  cardValidityPeriod: {
    month: string;
    year: string;
  };
  CARD_COMPANY_COLORS: CardCompanyColor;
}

const isCardType = (cardType: string): cardType is CardType => {
  return cardType in CARD_TYPE_IMAGES_PATH;
};

const getCardType = (cardNumber: string): CardType => {
  const cardTypes = {
    visa: /^4[0-9]{15}$/,
    masterCard: /^(5[1-5][0-9]{14})$/,
  };

  for (const [key, regex] of Object.entries(cardTypes)) {
    if (regex.test(cardNumber) && isCardType(key)) {
      return key;
    }
  }

  return 'default';
};

const CARD_TYPE_IMAGES_PATH = {
  visa: './Visa.png',
  masterCard: './Mastercard.png',
  default: '',
} as const;

type CardType = keyof typeof CARD_TYPE_IMAGES_PATH;

const CARD_PREVIEW_RULE = {
  SENSITIVE_INFO: 2,
} as const;

function CardPreview({
  cardNumber,
  cardValidityPeriod,
  CARD_COMPANY_COLORS,
}: CardPreviewProps) {
  const { month, year } = cardValidityPeriod;

  const cardType = getCardType(cardNumber.join(''));
  const imgPath = CARD_TYPE_IMAGES_PATH[cardType];

  return (
    <Card CARD_COMPANY_COLORS={CARD_COMPANY_COLORS}>
      <IcChip />
      <CardInfoWrapper CARD_COMPANY_COLORS={CARD_COMPANY_COLORS}>
        <CardNumberWrapper>
          {cardNumber.map((number, index) => {
            if (index < CARD_PREVIEW_RULE.SENSITIVE_INFO) {
              return <CardNumber key={index}>{number}</CardNumber>;
            }
            return (
              <CardNumber key={index}>{'*'.repeat(number.length)}</CardNumber>
            );
          })}
        </CardNumberWrapper>
        <div>
          {month !== '' ? <span>{month}/</span> : null}
          <span>{year}</span>
        </div>
      </CardInfoWrapper>
      {imgPath && <CardLogo src={imgPath} />}
    </Card>
  );
}

export default CardPreview;

const Card = styled.div<{ CARD_COMPANY_COLORS: CardCompanyColor }>`
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background: ${({ CARD_COMPANY_COLORS }) => CARD_COMPANY_COLORS};
  box-shadow: 3px 3px 5px 0px #00000040;
  position: relative;
  align-self: center;
`;

const IcChip = styled.div`
  width: 36px;
  height: 22px;
  top: 8px;
  left: 12px;
  background: #ddcd78;
  border: 0.5px solid #ddcd781a;
  border-radius: 3px;
  position: absolute;
`;

const CardInfoWrapper = styled.div<{ CARD_COMPANY_COLORS: CardCompanyColor }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 44px;
  left: 18px;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  color: ${({ CARD_COMPANY_COLORS }) =>
    CARD_COMPANY_COLORS === '#FFE600' ? '#000000' : ' #ffffff'};
`;

const CardNumberWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const CardNumber = styled.span`
  width: 34px;
  height: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 16%;
  vertical-align: middle;
`;

const CardLogo = styled.img`
  width: 36px;
  height: 22px;
  top: 8px;
  right: 12px;
  position: absolute;
`;
