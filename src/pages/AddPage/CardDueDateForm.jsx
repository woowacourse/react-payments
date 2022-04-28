import InputBox from "../../components/InputBox";
import { Input } from "../../components/Input/style";
import { FormWrapper } from "./style";
import { useState } from "react";

function CardDueDateForm({ dueDate, handleDueDate, dueYearInputRef }) {
  const [error, setError] = useState({ month: false, year: false });

  const handleMonthError = ({ target: { value } }) => {
    setError({ ...error, month: value > 12 || value < 1 });
  };

  const handleYearError = ({ target: { value } }) => {
    setError({ ...error, year: value < 22 });
  };

  return (
    <FormWrapper>
      <label>만료일</label>
      <InputBox size="50" error={error.month || error.year}>
        <Input
          type="number"
          value={dueDate.month}
          onChange={(e) => {
            handleDueDate("month", e);
            handleMonthError(e);
          }}
          placeholder="MM"
        />
        <span>/</span>
        <Input
          type="number"
          ref={dueYearInputRef}
          value={dueDate.year}
          onChange={(e) => {
            handleDueDate("year", e);
            handleYearError(e);
          }}
          placeholder="YY"
        />
      </InputBox>
    </FormWrapper>
  );
}

export default CardDueDateForm;
