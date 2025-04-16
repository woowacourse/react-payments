import styled from '@emotion/styled';

interface CardPreviewProps {
  cardNumber: string[];
  cardValidityPeriod: {
    month: string;
    year: string;
  };
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
  visa: '/Visa.png',
  masterCard: '/Mastercard.png',
  default: '',
};

type CardType = keyof typeof CARD_TYPE_IMAGES_PATH;

function CardPreview({ cardNumber, cardValidityPeriod }: CardPreviewProps) {
  const { month, year } = cardValidityPeriod;

  const cardType = getCardType(cardNumber.join(''));
  const imgPath = CARD_TYPE_IMAGES_PATH[cardType];

  return (
    <Card>
      <IcChip />
      <CardInfoWrapper>
        <CardNumberWrapper>
          {cardNumber.map((number, index) => {
            if (index < 2) {
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

const Card = styled.div`
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background: #333333;
  box-shadow: 3px 3px 5px 0px #00000040;
  position: relative;
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

const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 44px;
  left: 18px;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
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
