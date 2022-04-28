import InputBox from '../../components/InputBox'
import { Input } from '../../components/Input/style'
import { FormWrapper } from './style'

function CardDueDateForm({dueDate, handleDueDate, dueYearInputRef}) {
  return (
    <FormWrapper>
      <label>만료일</label>
      <InputBox size="50">
        <Input
          type="number"
          value={dueDate.month}
          onChange={(e) => handleDueDate("month", e)}
          placeholder="MM"
        />
        <span>/</span>
        <Input
          type="number"
          ref={dueYearInputRef}
          value={dueDate.year}
          onChange={(e) => handleDueDate("year", e)}
          placeholder="YY"
        />
      </InputBox>
      </FormWrapper>
  )
}

export default CardDueDateForm