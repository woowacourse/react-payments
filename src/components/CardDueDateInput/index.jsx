import PropTypes from "prop-types";
import InputBox from "../../components/common/InputBox";
import { Input } from "../../components/common/Input/style";
import { CardInputWrapper } from "../../pages/CardAddPage/style";

function CardDueDateInput({
  dueDate,
  handleChangeDueDate,
  dueYearInputRef,
  error,
}) {
  return (
    <CardInputWrapper>
      <label>만료일</label>
      <InputBox size="50" error={error.month || error.year}>
        <Input
          type="number"
          value={dueDate.month}
          onChange={(e) => handleChangeDueDate("month", e)}
          placeholder="MM"
        />
        <span>/</span>
        <Input
          type="number"
          ref={dueYearInputRef}
          value={dueDate.year}
          onChange={(e) => handleChangeDueDate("year", e)}
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
  dueYearInputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  error: PropTypes.shape({
    month: PropTypes.bool,
    year: PropTypes.bool,
  }),
};

export default CardDueDateInput;
