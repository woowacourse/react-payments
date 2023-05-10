import React from "react";
import Input from "src/components/@common/Input";
import ErrorSpan from "src/components/@common/ErrorSpan";
import FormLabel from "src/components/@common/FormLabel";
import { Styled as S } from "./ExpireDate.styles";
import { NUMBERS } from "src/utils/constant";
import { expireDateValidation } from "src/utils/validation";
import useCardInfoInput from "src/hooks/useCardInfoInput";
import useAutoFocus from "src/hooks/useAutoFocus";
import { getInputRefValueSum } from "src/utils";

function ExpireDate() {
  const { EACH_MM_YY } = NUMBERS;

  const { refs, nextInputFocus } = useAutoFocus({
    maxLength: EACH_MM_YY,
  });

  const { value, onChange, error } = useCardInfoInput<string>({
    contextType: "expireDate",
    validation: (value) => {
      const date = getInputRefValueSum(refs);

      expireDateValidation(date);
    },
    nextInputFocus,
  });

  return (
    <S.ExpireDateContainer>
      <FormLabel>{"만료일"}</FormLabel>
      <S.InputContainer>
        <Input
          value={value[0]}
          data-index={0}
          onChange={onChange}
          maxLength={EACH_MM_YY}
          customInputStyle={S.ExpireDateInput}
          placeholder="MM"
          ref={(el) => (refs.current[0] = el as HTMLInputElement)}
        />
        <span>/</span>
        <Input
          value={value[1]}
          data-index={1}
          onChange={onChange}
          maxLength={EACH_MM_YY}
          customInputStyle={S.ExpireDateInput}
          placeholder="YY"
          ref={(el) => (refs.current[1] = el as HTMLInputElement)}
        />
      </S.InputContainer>
      {error.isError && <ErrorSpan>{error.message}</ErrorSpan>}
    </S.ExpireDateContainer>
  );
}
export default ExpireDate;
