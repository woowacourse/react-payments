import S from "./style";
import useInputs from "@/hooks/useInputs";
import CardNumbersField from "./components/CardNumbersField/CardNumbersField";
import ExpirationPeriodField from "./components/ExpirationPeriodField/ExpirationPeriodField";
import OwnerNameField from "./components/OwnerNameField/OwnerNameField";
import useInput from "@/hooks/useInput";
import {
  CardNumberInputType,
  ExpirationPeriodInputType,
} from "@/pages/CardRegisterPage/CardRegisterPage";

interface Props {
  cardNumbersState: ReturnType<typeof useInputs<CardNumberInputType>>;
  expiredPeriodState: ReturnType<typeof useInputs<ExpirationPeriodInputType>>;
  ownerNameState: ReturnType<typeof useInput>;
}

const CardRegisterForm = ({
  cardNumbersState,
  expiredPeriodState,
  ownerNameState,
}: Props) => {
  return (
    <S.CardFormWrapper>
      <CardNumbersField cardNumbersState={cardNumbersState} />
      <ExpirationPeriodField expiredPeriodState={expiredPeriodState} />
      <OwnerNameField ownerNameState={ownerNameState} />
    </S.CardFormWrapper>
  );
};

export default CardRegisterForm;
