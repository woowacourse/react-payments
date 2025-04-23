import styled from 'styled-components';
import {CardCompany, CardNumber, ExpirationDate} from '../../type/Card';
import {CARD_COMPANY} from '../constants/card';

type Props = {
  cardNumbers: CardNumber;
  expirationDate: ExpirationDate;
  cardCompany: CardCompany | '';
};

const BADGE_BRAND = {
  NONE: 0,
  MASTER_CARD: 1,
  VISA: 2,
};

const cardBrandRules = [
  {
    brand: BADGE_BRAND.MASTER_CARD,
    validate: (cardFirstSection: string) => {
      if (cardFirstSection.length >= 2) {
        const firstTwoDigits = parseInt(cardFirstSection.substring(0, 2));
        return firstTwoDigits >= 51 && firstTwoDigits <= 55;
      }

      return false;
    },
  },
  {
    brand: BADGE_BRAND.VISA,
    validate: (cardFirstSection: string) => cardFirstSection.startsWith('4'),
  },
];

const badgeImagePath = (badgeBrand: number) => {
  return (
    {
      1: './images/Mastercard.png',
      2: './images/Visa.png',
    }[badgeBrand] ?? ''
  );
};

const formatDate = (expirationDate: ExpirationDate) => {
  const {month, year} = expirationDate;

  if (month === '' && year === '') return '';
  if (year === '') return month;
  return `${month} / ${year}`;
};

const Card = ({cardNumbers, expirationDate, cardCompany}: Props) => {
  const matchedCard = cardBrandRules.find((rule) =>
    rule.validate(cardNumbers.first)
  );

  return (
    <Container
      background={
        cardCompany !== '' ? CARD_COMPANY[cardCompany]?.color : cardCompany
      }
    >
      <Wrap>
        <Chip />
        <BrandBadge
          image={badgeImagePath(matchedCard ? matchedCard.brand : 0)}
        />
      </Wrap>

      <CardInfoWrap>
        {Object.entries(cardNumbers).map(([key, value]) => (
          <CardNumbers key={key} blind={key === 'third' || key === 'fourth'}>
            {key === 'third' || key === 'fourth'
              ? '•'.repeat(value?.length)
              : value}
          </CardNumbers>
        ))}
      </CardInfoWrap>

      <CardInfoWrap>{formatDate(expirationDate)}</CardInfoWrap>
    </Container>
  );
};

export default Card;

const Container = styled.div<{background: string}>`
  width: 212px;
  height: 132px;
  margin: 0 auto 45px;
  padding: 8px 12px;
  border-radius: 4px;
  background: ${(props) => (props.background ? props.background : '#333')};
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
`;

const Chip = styled.div`
  background-color: #ddcd78;
  width: 36px;
  height: 22px;
  border-radius: 5px;
`;

const BrandBadge = styled.div<{image: string}>`
  background-image: url('${(props) => props.image}');
  background-size: cover;
  width: 36px;
  height: 22px;
  border-radius: 5px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardInfoWrap = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
`;

const CardNumbers = styled.p<{blind: boolean}>`
  letter-spacing: ${(props) => (props.blind ? '' : '2.24px')};
`;
