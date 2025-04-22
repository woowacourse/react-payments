import styled from '@emotion/styled';
import CVCInput from '../CVCInput/CVCInput';
import CardNumberInput from '../CardNumberInput/CardNumberInput';
import ExpirationDateInput from '../ExpirationDateInput/ExpirationDateInput';
import PreviewCard from '../PreviewCard/PreviewCard';
import Text from '../Text/Text';
import { CARD_PAGE_TEXT } from './cardPageText';
import useInputArrayState from '../../hooks/useInputArrayState';

export type HandleInputParams = {
  e: React.ChangeEvent<HTMLInputElement>;
  idx: number;
};

const StyledCardPage = styled.div`
  width: 40%;
  min-width: 400px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
`;

const CardPage = () => {
  const [cardNumber, handleCardNumberInput] = useInputArrayState(4);
  const [expirationDate, handleExpirationDateInput] = useInputArrayState(2);
  const [cvc, handleCVCInput] = useInputArrayState(1);

  return (
    <StyledCardPage>
      <PreviewCard cardNumber={cardNumber} expirationDate={expirationDate} />
      <Text type="title" text={CARD_PAGE_TEXT.CARD_NUMBER_TITLE} />
      <Text type="subTitle" text={CARD_PAGE_TEXT.CARD_NUMBER_SUBTITLE} />

      <CardNumberInput values={cardNumber} onChange={handleCardNumberInput} />

      <Text type="title" text={CARD_PAGE_TEXT.EXPIRATION_TITLE} />
      <Text type="subTitle" text={CARD_PAGE_TEXT.EXPIRATION_SUBTITLE} />

      <ExpirationDateInput values={expirationDate} onChange={handleExpirationDateInput} />

      <Text type="title" text={CARD_PAGE_TEXT.CVC_TITLE} />

      <CVCInput values={cvc} onChange={handleCVCInput} />
    </StyledCardPage>
  );
};

export default CardPage;
