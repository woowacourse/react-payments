import Announcement from './components/common/Announcement';
import Card from './components/domain/Card';
import CardNumberForm from './components/domain/CardNumberForm';
import CardExpirationForm from './components/domain/CardExpirationForm';
import CardCVCForm from './components/domain/CardCVCForm';
import styled from '@emotion/styled';
import useCardInfo from './hooks/useCardInfo';
import {
  CARD_COMPANY_MESSAGE,
  CARD_NUMBER_MESSAGE,
  CONFIRM_BUTTON_LABEL,
  CVC_MESSAGE,
  EXPIRATION_MESSAGE,
  PASSWORD_FRONT_MESSAGE,
} from './constants/guide';
import { CARD_COMPANY_NAMES, CARD_INFO_LENGTH } from './constants/setting';
import { VIEWPORT } from './constants/viewport';
import CardPasswordForm from './components/domain/CardPasswordForm';
import DropdownInput from './components/common/DropdownInput';
import BottomButton from './components/domain/BottomButton';

function App() {
  const { cardInfo, handleCardInfo } = useCardInfo();

  return (
    <AppContainer>
      <Card
        cardNumber={[
          cardInfo.number.first,
          cardInfo.number.second,
          cardInfo.number.third,
          cardInfo.number.fourth,
        ]}
        company={cardInfo.company}
        expiration={{ month: cardInfo.expiration.month, year: cardInfo.expiration.year }}
      />
      <FormContainer>
        <Announcement main={CARD_NUMBER_MESSAGE.MAIN} caption={CARD_NUMBER_MESSAGE.CAPTION} />
        <CardNumberForm
          cardInfo={cardInfo}
          handleCardInfo={handleCardInfo}
          maxLength={CARD_INFO_LENGTH.NUMBER}
        />
        <Announcement main={CARD_COMPANY_MESSAGE.MAIN} caption={CARD_COMPANY_MESSAGE.CAPTION} />
        <DropdownInput
          value={cardInfo.company}
          setValue={(value) => handleCardInfo('company', value)}
          options={CARD_COMPANY_NAMES}
          placeholder={CARD_COMPANY_MESSAGE.PLACEHOLDER}
        />
        <Announcement main={EXPIRATION_MESSAGE.MAIN} caption={EXPIRATION_MESSAGE.CAPTION} />
        <CardExpirationForm
          cardInfo={cardInfo}
          handleCardInfo={handleCardInfo}
          maxLength={CARD_INFO_LENGTH.EXPIRATION}
        />
        <Announcement main={CVC_MESSAGE.MAIN} />
        <CardCVCForm
          cardInfo={cardInfo}
          handleCardInfo={handleCardInfo}
          maxLength={CARD_INFO_LENGTH.CVC}
        />
        <Announcement main={PASSWORD_FRONT_MESSAGE.MAIN} caption={PASSWORD_FRONT_MESSAGE.CAPTION} />
        <CardPasswordForm
          cardInfo={cardInfo}
          handleCardInfo={handleCardInfo}
          maxLength={CARD_INFO_LENGTH.PASSWORD_FRONT}
        />
      </FormContainer>
      <BottomButton label={CONFIRM_BUTTON_LABEL} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: ${VIEWPORT.MOBILE}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 100%;
  height: 65vh;
  overflow-y: auto;
`;
