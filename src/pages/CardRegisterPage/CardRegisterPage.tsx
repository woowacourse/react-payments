import S from "./style";
import CardRegisterForm from "@/components/CardRegisterForm/CardRegisterForm";
import CardPreview from "@/components/CreditCardPreview/CardPreview";
import { useState } from "react";
import BasicButton from "@/components/_common/BasicButton/BasicButton";
import { theme } from "@/style/theme";
import { useNavigate } from "react-router-dom";
import useCardRegister from "@/hooks/useCardRegister";
import { ROUTE_URL } from "@/constants/url";
import { REGISTER_STEP } from "@/constants/condition";
import useFormProgress from "@/hooks/useFormProgress";

const CardRegisterPage = () => {
  const navigate = useNavigate();
  const cardRegisterInfo = useCardRegister();
  const {
    cardNumbersState,
    expirationPeriodState,
    cardBrandState,
    CVCNumbersState,
    passwordState,
    ownerNameState,
  } = cardRegisterInfo;

  const [isFront, setIsFront] = useState<boolean>(true);
  const [isNameEntered, setIsNameEntered] = useState<boolean>(false);

  const isValidatedArr = [
    cardNumbersState.isValidated,
    cardBrandState.isValidated,
    expirationPeriodState.isValidated,
    ownerNameState.isValidated && isNameEntered,
    CVCNumbersState.isValidated,
    passwordState.isValidated,
  ];

  const { progressCompleted, formProgress } = useFormProgress({
    isValidatedArr,
    isNameEntered,
  });

  const onSubmitCardInfo = () => {
    navigate(ROUTE_URL.REGISTER_CONFIRM, {
      state: {
        startNumbers: cardNumbersState.values.cardNumbers1,
        cardType: cardBrandState.value,
      },
    });

    const cardRegisterInfo = {
      cardNumbers: cardNumbersState.values,
      expirationNumbers: expirationPeriodState.values,
      cardBrandState: cardBrandState.value,
      ownerName: ownerNameState.value,
      CVCNumbersState: CVCNumbersState.value,
      passwordState: passwordState.value,
    };
    console.log("카드 등록 정보", cardRegisterInfo);
  };

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
          {...cardRegisterInfo}
          formProgress={formProgress}
          setIsFront={setIsFront}
          setIsNameEntered={setIsNameEntered}
        />
      </S.FlexWrapper>
      {formProgress === REGISTER_STEP.ALL_PASSED && progressCompleted && (
        <BasicButton
          borderType="square"
          position="bottom"
          height={52}
          disabled={formProgress !== REGISTER_STEP.ALL_PASSED}
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
