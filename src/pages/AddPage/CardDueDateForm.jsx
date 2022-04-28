import InputBox from "../../components/InputBox";
import { Input } from "../../components/Input/style";
import { FormWrapper } from "./style";
import { useState } from "react";
import { MONTH } from '../../constant'

function CardDueDateForm({ dueDate, handleDueDate, dueYearInputRef }) {
  const [error, setError] = useState({ month: false, year: false });

  const handleMonthError = ({ target: { value } }) => {
    setError({ ...error, month: value > MONTH.MAX || value < MONTH.MIN });
  };

  const handleYearError = ({ target: { value } }) => {
    const currentYear = new Date().getFullYear().toString().slice(2);
    setError({ ...error, year: value < currentYear });
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
