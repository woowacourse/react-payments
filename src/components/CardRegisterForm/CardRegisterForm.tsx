import S from "./style";
import useInputs from "@/hooks/useInputs";
import CardNumbersField from "./components/CardNumbersField/CardNumbersField";
import ExpirationPeriodField from "./components/ExpirationPeriodField/ExpirationPeriodField";
import OwnerNameField from "./components/OwnerNameField/OwnerNameField";

interface Props {
  cardNumbersState: ReturnType<typeof useInputs>;
  expiredPeriodState: ReturnType<typeof useInputs>;
  ownerNameState: ReturnType<typeof useInputs>;
}

const CardRegisterForm = ({
  cardNumbersState,
  expiredPeriodState,
  ownerNameState,
}: Props) => {
  return (
    <S.CardFormWrapper>
      {/*카드 번호*/}
      <CardNumbersField cardNumbersState={cardNumbersState} />

      {/*유효 기간*/}
      <ExpirationPeriodField expiredPeriodState={expiredPeriodState} />

      {/*소유자 이름*/}
      <OwnerNameField ownerNameState={ownerNameState} />
    </S.CardFormWrapper>
  );
};

export default CardRegisterForm;
