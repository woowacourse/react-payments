import styled from '@emotion/styled';
import { CARD_PAGE_TEXT } from '../../constants/cardPageText';
import PreviewCard from './components/PreviewCard/PreviewCard';
import Text from '../../components/Text/Text';
import CardNumberInput from './components/CardNumberInput/CardNumberInput';
import ExpirationDateInput from './components/ExpirationDateInput/ExpirationDateInput';
import CVCInput from './components/CVCInput/CVCInput';
import { useInput } from '../../hooks/useInput';

export type HandleInputParams = {
  value: string;
  idx: number;
};

const CardPage = () => {
  const [cardNumber, handleCardNumberInput] = useInput(['', '', '', '']);
  const [expirationDate, handleExpirationDateInput] = useInput(['', '']);
  const [cvc, handleCVCInput] = useInput(['']);

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
