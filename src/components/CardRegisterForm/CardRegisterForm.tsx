import S from "./style";
import useInputs from "@/hooks/useInputs";
import { CardNumberInputType } from "./components/CardNumbersField/CardNumbersField";
import { ExpirationPeriodInputType } from "./components/ExpirationPeriodField/ExpirationPeriodField";
import useInput from "@/hooks/useInput";
import { REGISTER_STEP } from "@/constants/condition";
import { CardBrandType } from "@/constants/cardBrandType";
import ExpirationPeriodFieldMemo from "./components/ExpirationPeriodField/ExpirationPeriodField";
import CardNumbersFieldMemo from "./components/CardNumbersField/CardNumbersField";
import OwnerNameFieldMemo from "./components/OwnerNameField/OwnerNameField";
import CVCFieldMemo from "./components/CVCField/CVCField";
import PasswordFieldMemo from "./components/PasswordField/PasswordField";
import CardBrandSelectFieldMemo from "./components/CardBrandSelectField/CardBrandSelectField";

interface Props {
  cardNumbersState: ReturnType<typeof useInputs<CardNumberInputType>>;
  expirationPeriodState: ReturnType<
    typeof useInputs<ExpirationPeriodInputType>
  >;
  ownerNameState: ReturnType<typeof useInput<string>>;
  CVCNumbersState: ReturnType<typeof useInput<string>>;
  passwordState: ReturnType<typeof useInput<string>>;
  cardBrandState: ReturnType<typeof useInput<CardBrandType | null>>;
  step: number;
  setIsFront: React.Dispatch<React.SetStateAction<boolean>>;
  setIsNameEntered: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardRegisterForm = ({
  cardNumbersState,
  expirationPeriodState,
  ownerNameState,
  CVCNumbersState,
  passwordState,
  cardBrandState,
  step,
  setIsFront,
  setIsNameEntered,
}: Props) => {
  return (
    <S.CardFormWrapper>
      {step >= REGISTER_STEP.PASSWORD && (
        <PasswordFieldMemo passwordState={passwordState} />
      )}
      {step >= REGISTER_STEP.CVC && (
        <CVCFieldMemo
          CVCNumbersState={CVCNumbersState}
          setIsFront={setIsFront}
        />
      )}
      {step >= REGISTER_STEP.OWNER_NAME && (
        <OwnerNameFieldMemo
          ownerNameState={ownerNameState}
          setIsNameEntered={setIsNameEntered}
        />
      )}
      {step >= REGISTER_STEP.EXPIRATION_PERIOD && (
        <ExpirationPeriodFieldMemo
          expirationPeriodState={expirationPeriodState}
        />
      )}
      {step >= REGISTER_STEP.CARD_BRAND && (
        <CardBrandSelectFieldMemo cardBrandState={cardBrandState} />
      )}
      <CardNumbersFieldMemo cardNumbersState={cardNumbersState} />
    </S.CardFormWrapper>
  );
};

export default CardRegisterForm;
