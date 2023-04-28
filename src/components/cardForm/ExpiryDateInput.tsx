import { Container } from "../common/Container";
import { Input } from "../common/Input";
import { InputLabel } from "../common/InputLabel";
import { EXPRIYDATE_MAXLEGNTH, EXPRIYDATE_REGEX, TWO_TO_NINE_REGEX } from "../../constants";
import { SubmitManageContext } from "../../contexts/SubmitManageContext";
import { NewCardContext } from "../../contexts/NewCardContext";

import { useContext } from "react";

const paddingSingleDigitMonth = (expriyDate: string) => {
  if (expriyDate.length === 2 && !new RegExp(TWO_TO_NINE_REGEX).test(expriyDate[0])) {
    return `${"0"}${expriyDate}`;
  }

  return expriyDate;
};

const ExpiryDateInfo = {
  label: "expiryDate",
  placeholder: "MM / YY",
  type: "text",
  $width: "137px",
  $textPosition: "center",
};

export const ExpiryDateInput = () => {
  const { isInputsValid, setExpriyDateCompleted, setIsExpiryDateValid } = useContext(SubmitManageContext);
  const { setExpiryDate } = useContext(NewCardContext);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replaceAll(" / ", "");

    if (value.length > EXPRIYDATE_MAXLEGNTH) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    const expriyDate = paddingSingleDigitMonth(value);

    e.target.value = (expriyDate.match(new RegExp(EXPRIYDATE_REGEX)) ?? []).join(" / ");
    setExpiryDate(e.target.value);

    setExpriyDateCompleted(false);
    setIsExpiryDateValid(true);
    if (value.length === EXPRIYDATE_MAXLEGNTH) {
      setExpriyDateCompleted(true);
    }
  };

  return (
    <Container>
      <InputLabel text="만료일" name="expiryDate" />
      <Input
        {...ExpiryDateInfo}
        handleInput={handleInput}
        error={{
          isValid: isInputsValid.isExpiryDateValid,
          errorMessage: "유효한 만료일을 입력해주세요.",
        }}
      />
    </Container>
  );
};
