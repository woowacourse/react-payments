import { CARD_PAGE_TEXT } from '../../constants/cardPageText';
import PreviewCard from './components/PreviewCard/PreviewCard';
import Text from '../../components/Text/Text';
import CardNumberInput from './components/CardNumberInput/CardNumberInput';
import ExpirationDateInput from './components/ExpirationDateInput/ExpirationDateInput';
import CVCInput from './components/CVCInput/CVCInput';
import { useInput } from '../../hooks/useInput';
import CardCompanySelectBox from './components/CardCompanySelectBox/CardCompanySelectBox';
import PasswordInput from './components/PasswordInput/PasswordInput';
import { useSelect } from '../../hooks/useSelect';
import Button from '../../components/Button/Button';
import useTotalInputValidation from '../../hooks/useTotalInputValidation';
import useStep from '../../hooks/useStep';
import { useCardRouter } from '../../hooks/useCardRouter';
import { ButtonContainer, StyledCardPage } from './CardPage.styles';

export type HandleInputParams = {
  value: string;
  idx: number;
};

const CardPage = () => {
  const [cardNumber, handleCardNumberInput] = useInput(['', '', '', '']);
  const [cardCompany, handleCardCompanyInput] = useSelect('');
  const [expirationDate, handleExpirationDateInput] = useInput(['', '']);
  const [cvc, handleCVCInput] = useInput(['']);
  const [password, handlePasswordInput] = useInput(['']);

  const { goToNextStep, isPassedStep, InputStep } = useStep();
  const { updateValidity, isAllValid } = useTotalInputValidation(5);
  const { navigateToCardComplete } = useCardRouter();

  return (
    <StyledCardPage>
      <PreviewCard
        cardNumber={cardNumber}
        expirationDate={expirationDate}
        cardCompany={cardCompany}
      />
      {isPassedStep(InputStep.PASSWORD) && (
        <>
          <Text type="title" text={CARD_PAGE_TEXT.PASSWORD_TITLE} />
          <Text type="subTitle" text={CARD_PAGE_TEXT.PASSWORD_SUBTITLE} />
          <PasswordInput
            values={password}
            onChange={handlePasswordInput}
            onComplete={() => goToNextStep(InputStep.PASSWORD)}
            onValidityChange={(isValid) => updateValidity(InputStep.PASSWORD, isValid)}
          />
        </>
      )}
      {isPassedStep(InputStep.CVC) && (
        <>
          <Text type="title" text={CARD_PAGE_TEXT.CVC_TITLE} />
          <CVCInput
            values={cvc}
            onChange={handleCVCInput}
            onComplete={() => goToNextStep(InputStep.CVC)}
            onValidityChange={(isValid) => updateValidity(InputStep.CVC, isValid)}
          />
        </>
      )}
      {isPassedStep(InputStep.EXPIRATION_DATE) && (
        <>
          <Text type="title" text={CARD_PAGE_TEXT.EXPIRATION_TITLE} />
          <Text type="subTitle" text={CARD_PAGE_TEXT.EXPIRATION_SUBTITLE} />
          <ExpirationDateInput
            values={expirationDate}
            onChange={handleExpirationDateInput}
            onComplete={() => goToNextStep(InputStep.EXPIRATION_DATE)}
            onValidityChange={(isValid) => updateValidity(InputStep.EXPIRATION_DATE, isValid)}
          />
        </>
      )}
      {isPassedStep(InputStep.CARD_COMPANY) && (
        <>
          <Text type="title" text={CARD_PAGE_TEXT.CARD_COMPANY_TITLE} />
          <Text type="subTitle" text={CARD_PAGE_TEXT.CARD_COMPANY_SUBTITLE} />
          <CardCompanySelectBox
            value={cardCompany}
            onChange={handleCardCompanyInput}
            onComplete={() => goToNextStep(InputStep.CARD_COMPANY)}
            onValidityChange={(isValid) => updateValidity(InputStep.CARD_COMPANY, isValid)}
          />
        </>
      )}
      {isPassedStep(InputStep.CARD_NUMBER) && (
        <>
          <Text type="title" text={CARD_PAGE_TEXT.CARD_NUMBER_TITLE} />
          <Text type="subTitle" text={CARD_PAGE_TEXT.CARD_NUMBER_SUBTITLE} />
          <CardNumberInput
            values={cardNumber}
            onChange={handleCardNumberInput}
            onComplete={() => goToNextStep(InputStep.CARD_NUMBER)}
            onValidityChange={(isValid) => updateValidity(InputStep.CARD_NUMBER, isValid)}
          />
        </>
      )}
      {isAllValid() && (
        <ButtonContainer>
          <Button
            onClick={() =>
              navigateToCardComplete({
                cardNumber,
                cardCompany,
              })
            }
          >
            확인
          </Button>
        </ButtonContainer>
      )}
    </StyledCardPage>
  );
};

export default CardPage;
