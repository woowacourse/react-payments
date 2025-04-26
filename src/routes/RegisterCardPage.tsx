import styled from '@emotion/styled';
import Title from '../components/common/Title';
import DropdownInput from '../components/common/DropdownInput';
import BottomButton from '../components/domain/BottomButton';
import Card from '../components/domain/Card';
import CardCVCForm from '../components/domain/CardCVCForm';
import CardExpirationForm from '../components/domain/CardExpirationForm';
import CardNumberForm from '../components/domain/CardNumberForm';
import CardPasswordForm from '../components/domain/CardPasswordForm';
import {
  CARD_COMPANY_MESSAGE,
  CARD_NUMBER_MESSAGE,
  CONFIRM_BUTTON_LABEL,
  CVC_MESSAGE,
  EXPIRATION_MESSAGE,
  PASSWORD_FRONT_MESSAGE,
} from '../constants/guide';
import { CARD_COMPANY_NAMES, CARD_INFO_LENGTH, ROUTER_PATH } from '../constants/setting';
import useCardInfo from '../hooks/useCardInfoState';
import { useNavigate } from 'react-router-dom';
import useCardInfoValidation from '../hooks/useCardInfoValidation';
import useDynamicRenderingStep from '../hooks/useDynamicRenderingStep';

function RegisterCardPage() {
  const { cardInfo, handleCardInfo } = useCardInfo();
  const isCardInfoError = useCardInfoValidation(cardInfo);
  const navigate = useNavigate();
  const { step } = useDynamicRenderingStep(cardInfo);

  return (
    <>
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
      <S.FormContainer>
        {step >= 4 && (
          <>
            <Title main={PASSWORD_FRONT_MESSAGE.MAIN} caption={PASSWORD_FRONT_MESSAGE.CAPTION} />
            <CardPasswordForm
              cardInfo={cardInfo}
              handleCardInfo={handleCardInfo}
              maxLength={CARD_INFO_LENGTH.PASSWORD_FRONT}
            />
          </>
        )}

        {step >= 3 && (
          <>
            <Title main={CVC_MESSAGE.MAIN} />
            <CardCVCForm
              cardInfo={cardInfo}
              handleCardInfo={handleCardInfo}
              maxLength={CARD_INFO_LENGTH.CVC}
            />
          </>
        )}

        {step >= 2 && (
          <>
            <Title main={EXPIRATION_MESSAGE.MAIN} caption={EXPIRATION_MESSAGE.CAPTION} />
            <CardExpirationForm
              cardInfo={cardInfo}
              handleCardInfo={handleCardInfo}
              maxLength={CARD_INFO_LENGTH.EXPIRATION}
            />
          </>
        )}

        {step >= 1 && (
          <>
            <Title main={CARD_COMPANY_MESSAGE.MAIN} caption={CARD_COMPANY_MESSAGE.CAPTION} />
            <DropdownInput
              value={cardInfo.company}
              setValue={(value) => handleCardInfo('company', value)}
              options={CARD_COMPANY_NAMES}
              placeholder={CARD_COMPANY_MESSAGE.PLACEHOLDER}
            />
          </>
        )}

        <Title main={CARD_NUMBER_MESSAGE.MAIN} caption={CARD_NUMBER_MESSAGE.CAPTION} />
        <CardNumberForm
          cardInfo={cardInfo}
          handleCardInfo={handleCardInfo}
          maxLength={CARD_INFO_LENGTH.NUMBER}
        />
      </S.FormContainer>
      {!isCardInfoError && (
        <BottomButton
          label={CONFIRM_BUTTON_LABEL}
          onClick={() => navigate(ROUTER_PATH.COMPLETE, { state: { cardInfo } })}
        />
      )}
    </>
  );
}

export default RegisterCardPage;

const S = {
  FormContainer: styled.div`
    width: 100%;
    height: 65vh;
    overflow-y: auto;
  `,
};
