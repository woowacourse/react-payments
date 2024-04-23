import S from "./style";
import useInputs from "@/hooks/useInputs";
import CardNumbersField from "./components/CardNumbersField/CardNumbersField";
import ExpirationPeriodField from "./components/ExpirationPeriodField/ExpirationPeriodField";
import useInput from "@/hooks/useInput";
import {
  CardNumberInputType,
  ExpirationPeriodInputType,
} from "@/pages/CardRegisterPage/CardRegisterPage";
import OwnerNameField from "./components/OwnerNameField/OwnerNameField";
import CVCField from "./components/CVCField/CVCField";
import PasswordField from "./components/PasswordField/PasswordField";

interface Props {
  cardNumbersState: ReturnType<typeof useInputs<CardNumberInputType>>;
  expiredPeriodState: ReturnType<typeof useInputs<ExpirationPeriodInputType>>;
  ownerNameState: ReturnType<typeof useInput>;
  CVCNumbersState: ReturnType<typeof useInput>;
  passwordState: ReturnType<typeof useInput>;
  cardTypeState: ReturnType<typeof useInput>;
}

const CardRegisterForm = ({
  cardNumbersState,
  expiredPeriodState,
  ownerNameState,
  CVCNumbersState,
  passwordState,
  cardTypeState,
}: Props) => {
  return (
    <S.CardFormWrapper>
      <PasswordField passwordState={passwordState} />
      <CVCField CVCNumbersState={CVCNumbersState} />
      <ExpirationPeriodField expiredPeriodState={expiredPeriodState} />
      <OwnerNameField ownerNameState={ownerNameState} />
      {/* <CardTypeSelectField cardTypeState={cardTypeState} /> */}
      <CardNumbersField cardNumbersState={cardNumbersState} />
    </S.CardFormWrapper>
  );
};

export default CardRegisterForm;
