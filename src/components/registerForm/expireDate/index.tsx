import React from "react";
import Input from "src/components/@common/Input";
import ErrorSpan from "src/components/@common/ErrorSpan";
import FormLabel from "src/components/@common/FormLabel";
import { Styled as S } from "./ExpireDate.styles";
import { NUMBERS } from "src/utils/constant";
import { MMYYValidation } from "src/utils/validation";
import useCardInfoInput from "src/hooks/useCardInfoInput";
import { ONLY_NUMBER_REGEXP } from "src/utils/regexp";

function ExpireDate() {
  const { value, onChange, error } = useCardInfoInput<string>({
    contextType: "expireDate",
    validation: (value) => {
      const [MM, YY] = value.split("/");
      const date = value.replace("/", "");

      if (!ONLY_NUMBER_REGEXP.test(date)) return;
      const dateValitation = MMYYValidation(date, [MM, YY]);

      if (dateValitation) {
        throw new Error("유효한 만료일이 아닙니다.");
      }
    },
  });

  return (
    <S.ExpireDateContainer>
      <FormLabel>{"만료일"}</FormLabel>
      <Input
        value={value}
        onChange={onChange}
        maxLength={NUMBERS.MAX_EXPIREDATE}
        customInputStyle={S.ExpireDateInput}
        placeholder="MM / YY"
      />
      {error.isError && <ErrorSpan>{error.message}</ErrorSpan>}
    </S.ExpireDateContainer>
  );
}
export default ExpireDate;
