import PropTypes from "prop-types";
import { CardInputWrapper } from "pages/style";
import InputBox from "components/InputBox";
import { Input } from "components/Input/style";
import { NAME } from "constant";
import { blockInputString } from "utils";

function CardDueDateInput({
  dueDate,
  handleChangeDueDate,
  yearInputRef,
  error,
}) {
  return (
    <CardInputWrapper>
      <label>만료일</label>
      <InputBox size="50" error={error.month || error.year}>
        <Input
          type="number"
          name={NAME.MONTH}
          value={dueDate.month}
          onChange={handleChangeDueDate}
          placeholder="MM"
          data-testid="due-month"
          onKeyDown={blockInputString}
        />
        <span>/</span>
        <Input
          type="number"
          name={NAME.YEAR}
          ref={yearInputRef}
          value={dueDate.year}
          onChange={handleChangeDueDate}
          placeholder="YY"
          data-testid="due-year"
          onKeyDown={blockInputString}
        />
      </InputBox>
    </CardInputWrapper>
  );
}

CardDueDateInput.propTypes = {
  dueDate: PropTypes.shape({
    month: PropTypes.string,
    year: PropTypes.string,
  }),
  handleChangeDueDate: PropTypes.func,
  yearInputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default CardDueDateInput;
