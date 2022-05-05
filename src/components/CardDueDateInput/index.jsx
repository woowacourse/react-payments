import PropTypes from "prop-types";
import InputBox from "components/common/InputBox";
import { Input } from "components/common/Input/style";
import { CardInputWrapper } from "pages/style";
import { NAME } from "constant";

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
        />
        <span>/</span>
        <Input
          type="number"
          name={NAME.YEAR}
          ref={yearInputRef}
          value={dueDate.year}
          onChange={handleChangeDueDate}
          placeholder="YY"
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
