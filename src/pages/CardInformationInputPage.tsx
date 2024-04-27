import { css } from '@emotion/react';
import CardFrontImage from '../components/cardInformationInput/CardFrontImage';
import CardNumberInput from '../components/cardInformationInput/CardNumberInput';
import useInputs from '../store/useInputs';
import CardOwnerInput from '../components/cardInformationInput/CardOwnerInput';
import CardPeriodInput from '../components/cardInformationInput/CardPeriodInput';
import CardIssuerSelect from '../components/cardInformationInput/CardIssuerSelect';
import { ReactNode, useState } from 'react';
import CardCVCInput from '../components/cardInformationInput/CardCVCInput';
import useInputBlur from '../store/useInputBlur';
import CardBackImage from '../components/cardInformationInput/CardBackImage';
import CardPassword from '../components/cardInformationInput/CardPassword';
import NavigateButton from '../components/common/NavigateButton';
import useCurrentIndex from '../store/useCurrentIndex';

function CardInformationInputPage() {
  const {
    valueInit: cardNumber,
    handleOnChange: cardOnChange,
    error: numberError,
    pass: cardNumberPass,
  } = useInputs({
    values: { number_1: '', number_2: '', number_3: '', number_4: '' },
    errorMessages: { number_1: '', number_2: '', number_3: '', number_4: '' },
  });

  const [issuer, setIssuer] = useState<string>('');

  const {
    valueInit: cardPeriod,
    handleOnChange: periodOnChange,
    error: periodError,
    pass: periodPass,
  } = useInputs({ values: { month: '', year: '' }, errorMessages: { month: '', year: '' } });

  const {
    valueInit: cardOwner,
    handleOnChange: ownerOnChange,
    error: ownerError,
    setBlur: ownerBlur,
    pass: ownerPass,
  } = useInputBlur({ values: { owner: '' }, errorMessages: { owner: '' } });

  const {
    valueInit: cardCVC,
    handleOnChange: CVCOnChange,
    error: CVCError,
    pass: CVCPass,
  } = useInputs({ values: { cvc: '' }, errorMessages: { cvc: '' } });

  const {
    handleOnChange: passwordOnChange,
    error: passwordError,
    pass: passwordPass,
  } = useInputs({ values: { password: '' }, errorMessages: { password: '' } });

  const [flipCard, setFlipCard] = useState(false);

  const currentIndex = useCurrentIndex(cardNumberPass, !!issuer, periodPass, ownerPass, CVCPass, passwordPass);

  const formList = [
    <CardNumberInput error={numberError} handleOnChange={cardOnChange} />,
    <CardIssuerSelect setValue={setIssuer} />,
    <CardPeriodInput error={periodError} handleOnChange={periodOnChange} />,
    <CardOwnerInput error={ownerError} setBlur={ownerBlur} handleOnChange={ownerOnChange} />,
    <CardCVCInput setFocus={setFlipCard} error={CVCError} handleOnChange={CVCOnChange} />,
    <CardPassword error={passwordError} handleOnChange={passwordOnChange} />,
  ];

  const calculateAllSuccess = () => {
    return cardNumberPass && issuer && periodPass && ownerPass && CVCPass && passwordPass;
  };

  return (
    <div css={appStyle}>
      <div css={appContainerStyle}>
        {flipCard ? (
          <CardBackImage cvc={cardCVC.cvc} />
        ) : (
          <CardFrontImage cardNumber={cardNumber} issuer={issuer} cardPeriod={cardPeriod} cardOwner={cardOwner} />
        )}

        <form css={appInputStyle}>
          {formList.map((component: ReactNode, index: number) => {
            if (index <= currentIndex) {
              return <>{component}</>;
            }
            return;
          })}

          {calculateAllSuccess() && (
            <div css={buttonPositionStyle}>
              <NavigateButton path="/complete" width="438px" sendData={cardNumber.number_1}>
                확인
              </NavigateButton>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

const buttonPositionStyle = css`
  position: fixed;

  left: 50%;
  transform: translate(-50%);
  bottom: 0;
`;

const appContainerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  padding: 31px;
  padding-bottom: 70px;
  gap: 45px;
  width: 376px;

  background-color: white;
  height: 100%;
`;

const appStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const appInputStyle = css`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  width: 100%;
`;

export default CardInformationInputPage;
