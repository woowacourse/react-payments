import styled from "styled-components";
import CardRegisterForm from "@/components/CardRegisterForm/CardRegisterForm";
import CreditCardPreview from "@/components/CreditCardPreview/CreditCardPreview";
import useInput from "@/hooks/useInput";
import { CARD_BRAND_INFO, INPUT_COUNTS } from "@/constants/condition";
import { makeStringArray } from "@/components/utils/arrayHelper";

const validateExpirationDate = (date: string[]) => {
  const [month, year] = date.map(Number);
  if (!(month >= 1 && month <= 12)) {
    return "1~12월 범위의 월을 입력해 주세요.";
  }
  const today = new Date();

  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear() - 2000;

  if (year && month) {
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return "이미 만료된 카드입니다.";
    }
  }

  return "";
};
const validateOwnerName = (name: string[]) => {
  const alphabetRegex = /^[a-zA-Z\s]*$/;
  if (!alphabetRegex.test(name[0])) {
    return "이름은 영어 대문자로 입력해 주세요.";
  }
  const doubleSpaceRegex = /\s{2,}/;
  if (doubleSpaceRegex.test(name[0])) {
    return "이름의 공백은 2회이상 연속되지 않아야 합니다.";
  }
  return "";
};

const CardRegister = () => {
  const cardNumbersState = useInput({
    initialValue: makeStringArray(INPUT_COUNTS.CARD_NUMBERS),
    maxNumberLength: 4,
    validLength: 4,
  });

  const expiredDateState = useInput({
    initialValue: makeStringArray(INPUT_COUNTS.EXPIRATION_PERIOD),
    maxNumberLength: 2,
    validLength: 2,
    onBlurValidate: validateExpirationDate,
  });

  const ownerNameState = useInput({
    initialValue: makeStringArray(1),
    onChangeValidate: validateOwnerName,
  });

  const checkCardBrand = (cardNumbers: string[]) => {
    if (Number(cardNumbers[0][0]) === CARD_BRAND_INFO.VISA.START_NUMBER) {
      return "VISA";
    }
    if (
      Number(cardNumbers[0].slice(0, 2)) <= CARD_BRAND_INFO.MASTER.END_NUMBER &&
      Number(cardNumbers[0].slice(0, 2)) >= CARD_BRAND_INFO.MASTER.START_NUMBER
    ) {
      return "MASTER";
    }
    return "NONE";
  };

  return (
    <S.CardRegisterWrapper>
      <S.FlexWrapper>
        <CreditCardPreview
          cardType={checkCardBrand(cardNumbersState.input)}
          cardNumbers={cardNumbersState.input}
          expirationDate={
            expiredDateState.input[0] && expiredDateState.input.join("/")
          }
          ownerName={ownerNameState.input[0]}
        />
        <CardRegisterForm
          cardNumbersState={cardNumbersState}
          expiredPeriodState={expiredDateState}
          ownerNameState={ownerNameState}
        />
      </S.FlexWrapper>
    </S.CardRegisterWrapper>
  );
};

export default CardRegister;

const CardRegisterWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexWrapper = styled.div`
  width: 375px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const S = {
  CardRegisterWrapper,
  FlexWrapper,
};
