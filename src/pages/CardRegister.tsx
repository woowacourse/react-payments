import styled from "styled-components";
import CardRegisterForm from "@/components/CardRegisterForm/CardRegisterForm";
import CreditCardPreview, { CardType } from "@/components/CreditCardPreview/CreditCardPreview";
import { CARD_BRAND_INFO, INPUT_COUNTS } from "@/constants/condition";
import useInputField, { IndividualValidator } from "@/hooks/useInputField";
const cardNumberValidators: IndividualValidator[] = [
  {
    errorMessage: `길이는 ${INPUT_COUNTS.CARD_NUMBERS}여야합니다.`,
    validate: (input: string) => input.length === 0 || input.length === INPUT_COUNTS.CARD_NUMBERS,
  },
  {
    errorMessage: `입력은 숫자형이어야합니다.`,
    validate: (input: string) => input.length === 0 || /^[0-9]*$/.test(input),
  },
];
const nameValidators: IndividualValidator[] = [
  {
    errorMessage: "이름은 영어 대문자로 입력해주세요.",
    validate: (input: string) => /^[a-zA-Z\s]*$/.test(input),
  },
  {
    errorMessage: "이름의 공백은 2회이상 연속되지 않아야 합니다..",
    validate: (input: string) => !/\s{2,}/.test(input),
  },
];

const expirationValidator: IndividualValidator[] = [
  {
    errorMessage: "월은 1~12의 범위여야합니다.",
    validate: (month: string) => month === "" || (Number(month) >= 1 && Number(month) <= 12),
    index: [0],
  },
  {
    errorMessage: `길이는 2여야합니다.`,
    validate: (input: string) => input.length === 0 || input.length === INPUT_COUNTS.EXPIRATION_DATE,
    index: [0, 1],
  },
  {
    errorMessage: `입력은 숫자형이어야합니다.`,
    validate: (input: string) => input.length === 0 || /^[0-9]*$/.test(input),
  },
];
const inputsOf = (validationStates: ReturnType<typeof useInputField>) =>
  validationStates.map((state) => state.inputState.value);

const checkCardBrand = (cardNumbers: string[]): CardType => {
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
const CardRegister = () => {
  const cardNumberValStates = useInputField({ individualValidators: cardNumberValidators, length: 4 });
  const expirationDateValStates = useInputField({ individualValidators: expirationValidator, length: 2 });
  const ownerNameValStates = useInputField({ individualValidators: nameValidators, length: 1 });

  return (
    <S.CardRegisterWrapper>
      <S.FlexWrapper>
        <CreditCardPreview
          cardType={checkCardBrand(inputsOf(cardNumberValStates))}
          cardNumbers={inputsOf(expirationDateValStates)}
          expirationDate={expirationDateValStates[0].inputState.value && inputsOf(expirationDateValStates).join("/")}
          ownerName={inputsOf(ownerNameValStates)[0]}
        />
        <CardRegisterForm
          cardNumbersState={cardNumberValStates}
          expiredPeriodState={expirationDateValStates}
          ownerNameState={ownerNameValStates}
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
