import { useContext, useEffect } from "react";
import styled from "styled-components";
import { MAX_LENGTH, PLACEHOLDER } from "../constants/inputInfo";
import { DataContext } from "../contexts/cardInfo";
import { ValidateContext } from "../contexts/validate";
import { useError } from "../hooks/useError";
import { useInputDate } from "../hooks/useInputDate";
import { validation } from "../validation";
import { Input } from "./common/Input";
import { InputBox } from "./common/InputBox";

export function ExpiredDate() {
  const { month, year, handleChange } = useContext(DataContext);
  const { error, handleError } = useError();
  const { valid, changeValid } = useContext(ValidateContext);

  useEffect(() => {
    changeValid("validDate", error);
  }, [month, year]);

  return (
    <Wrapper>
      <InputBox type={"DATE"} error={error}>
        <Input
          handleChange={handleChange}
          handleError={() => handleError(month, validation.isNumber)}
          name="month"
          maxLength={MAX_LENGTH.DATE}
          placeholder={PLACEHOLDER.MONTH}
        />
        /
        <Input
          handleChange={handleChange}
          handleError={() => handleError(year, validation.isNumber)}
          name="year"
          maxLength={MAX_LENGTH.DATE}
          placeholder={PLACEHOLDER.YEAR}
        />
      </InputBox>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 13.7rem;
`;
