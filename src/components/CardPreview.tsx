import { COLOR } from '../styles/color';
import DEFAULT_BLANK_IMAGE from '../Images/blank.png';
import IC_CHIP from '../Images/Ic_chip.png';
import MASTERCARD_IMAGE from '../Images/Mastercard.png';
import VISA_IMAGE from '../Images/Visa.png';
import styled from '@emotion/styled';

const issuerImg: { [key: string]: string } = {
  ['Visa']: VISA_IMAGE,
  ['MasterCard']: MASTERCARD_IMAGE,
};

const matchCardIssuerImgSrc = (issuer: string) => {
  const result = issuerImg[issuer];
  return result ?? DEFAULT_BLANK_IMAGE;
};

export default function CardPreview(props: cardInfoProps) {
  const { cardNumbers, cardIssuer, cardExpiredDate, cardHolder } =
    props.cardInfo;

  return (
    <CardPreviewContainer>
      <CardHeader>
        <img src={IC_CHIP} alt='IC Chip' />
        <img src={matchCardIssuerImgSrc(cardIssuer)} alt={cardIssuer} />
      </CardHeader>
      <CardNumberContainer>
        {cardNumbers.map((number, idx) => (
          <CardNumber key={idx}>
            {idx < 2 ? number : '*'.repeat(number.length)}
          </CardNumber>
        ))}
      </CardNumberContainer>
      <div>
        {cardExpiredDate.join('') !== '' ? cardExpiredDate.join('/') : ''}
      </div>
      <div>{cardHolder}</div>
    </CardPreviewContainer>
  );
}

const styledCardText = {
  color: COLOR.white,
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '20px',
};

const CardPreviewContainer = styled.section({
  width: '212px',
  height: '132px',
  top: '77px',
  left: '82px',
  padding: '10px 17px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '10px',
  borderRadius: '4px',
  backgroundColor: COLOR.gray2,
  boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.25)',
  ...styledCardText,
});

const CardHeader = styled.div({
  height: '22px',
  display: 'flex',
  justifyContent: 'space-between',

  '& img': {
    width: '32px',
  },
});

const CardNumberContainer = styled.div({
  display: 'flex',
  gap: '10px',
});

const CardNumber = styled.span({
  width: '30px',
});

interface cardInfoProps {
  cardInfo: {
    cardNumbers: [string, string, string, string];
    cardIssuer: '' | 'Visa' | 'MasterCard';
    cardExpiredDate: [string, string];
    cardHolder: string;
  };
}
