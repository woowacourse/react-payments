import S from "./style";
import CardRegisterForm from "@/components/CardRegisterForm/CardRegisterForm";
import CardPreview from "@/components/CreditCardPreview/CardPreview";
import { useEffect, useState } from "react";
import BasicButton from "@/components/_common/BasicButton/BasicButton";
import { theme } from "@/style/theme";
import { useNavigate } from "react-router-dom";
import useCardRegister from "@/hooks/useCardRegister";
import { ROUTE_URL } from "@/constants/url";
import { REGISTER_STEP } from "@/constants/condition";

const CardRegisterPage = () => {
  const navigate = useNavigate();
  const cardRegister = useCardRegister();
  const {
    cardNumbersState,
    expirationPeriodState,
    cardBrandState,
    CVCNumbersState,
    passwordState,
    ownerNameState,
  } = cardRegister;

  const [step, setStep] = useState<number>(1);
  const [isFront, setIsFront] = useState<boolean>(true);
  const [isNameEntered, setIsNameEntered] = useState<boolean>(false);

  const onSubmitCardInfo = () => {
    navigate(ROUTE_URL.REGISTER_CONFIRM, {
      state: {
        startNumbers: cardNumbersState.values.cardNumbers1,
        cardType: cardBrandState.value,
      },
    });
  };

  const stepPassedArr = [
    !cardNumbersState.isError,
    !!cardBrandState.value?.length,
    !expirationPeriodState.isError,
    !ownerNameState.isError && isNameEntered,
    !CVCNumbersState.isError,
    !passwordState.isError,
  ];

  const allPassed = stepPassedArr.every((isCompleted) => isCompleted === true);

  useEffect(() => {
    if (stepPassedArr[step - 1] && step <= stepPassedArr.length) {
      setStep((prev) => prev + 1);
    }
  }, [step, stepPassedArr]);

  return (
    <S.CardRegisterWrapper>
      <S.FlexWrapper>
        <CardPreview
          cardBrandType={cardBrandState.value}
          cardNumbers={cardNumbersState.values}
          expirationDate={expirationPeriodState.values}
          ownerName={ownerNameState.value}
          CVCNumbers={CVCNumbersState.value}
          isFront={isFront}
          setIsFront={setIsFront}
        />
        <CardRegisterForm
          {...cardRegister}
          step={step}
          setIsFront={setIsFront}
          setIsNameEntered={setIsNameEntered}
        />
      </S.FlexWrapper>
      {step === REGISTER_STEP.ALL_PASSED && allPassed && (
        <BasicButton
          borderType="square"
          position="bottom"
          height={52}
          disabled={step !== REGISTER_STEP.ALL_PASSED}
          backgroundColor={theme.COLOR["grey-3"]}
          onClick={onSubmitCardInfo}
        >
          확인
        </BasicButton>
      )}
    </S.CardRegisterWrapper>
  );
};

export default CardRegisterPage;
