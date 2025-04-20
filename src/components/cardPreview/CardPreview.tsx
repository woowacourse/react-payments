import styled from 'styled-components';
import { CardNumber, ExpirationPeriod } from '../../\btypes/index.types';
import { INITIALIZE_VALUE } from '../../constants/constant';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  height: 250px;
  max-width: 400px;
  background-color: #333333;
  border-radius: 8px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  padding: 15px 20px;
`;

const StyledIconWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 30px;
`;

const StyledMagnetic = styled.div`
  width: 100%;
  max-width: 50px;
  height: 30px;
  border-radius: 6px;
  background-color: #ddcd78;
`;

const StyledLogoWrap = styled.div`
  width: 100%;
  max-width: 50px;
  height: 30px;
  border-radius: 6px;
  background-color: #ffffff;
`;

const StyledCardNumberWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 10px;
`;
const StyledCardNumber = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: 500;
  text-align: left;
  letter-spacing: 16%;
  color: #ffffff;
`;

const StyledExpirationPeriod = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 16%;
  color: #ffffff;
`;

type CardPreviewProps = {
  cardNumber: CardNumber;
  expirationPeriod: ExpirationPeriod;
};

const CARD_IDENTIFYING_NUMBER = {
  VISA: 4,
  MASTERCARD: {
    MIN: 51,
    MAX: 55,
  },
};

type LogoSrc = './images/Visa.svg' | './images/Mastercard.svg';

const logoSrc: Record<string, LogoSrc> = {
  visa: './images/Visa.svg',
  master: './images/Mastercard.svg',
};

const getLogoSrc = (id: number) => {
  if (id === CARD_IDENTIFYING_NUMBER.VISA) {
    return logoSrc.visa;
  }
  if (CARD_IDENTIFYING_NUMBER.MASTERCARD.MIN <= id && id <= CARD_IDENTIFYING_NUMBER.MASTERCARD.MAX) {
    return logoSrc.master;
  }
  return INITIALIZE_VALUE;
};

function CardPreview({ cardNumber, expirationPeriod }: CardPreviewProps) {
  const id = Number(cardNumber['first'].slice(0, 2));
  const logoSrcString = getLogoSrc(id);

  return (
    <StyledContainer>
      <StyledIconWrap>
        <StyledMagnetic></StyledMagnetic>
        {logoSrcString !== INITIALIZE_VALUE ? (
          <StyledLogoWrap>
            <img src={logoSrcString} alt="logo" style={{ width: '100%', height: '100%' }} />
          </StyledLogoWrap>
        ) : null}
      </StyledIconWrap>
      <StyledCardNumberWrap>
        <StyledCardNumber>{cardNumber['first']}</StyledCardNumber>
        <StyledCardNumber>{cardNumber['second']}</StyledCardNumber>
        <StyledCardNumber>{'*'.repeat(cardNumber['third'].length)}</StyledCardNumber>
        <StyledCardNumber>{'*'.repeat(cardNumber['fourth'].length)}</StyledCardNumber>
      </StyledCardNumberWrap>
      <StyledExpirationPeriod>
        {expirationPeriod['month']}/{expirationPeriod['year']}
      </StyledExpirationPeriod>
    </StyledContainer>
  );
}

export default CardPreview;
