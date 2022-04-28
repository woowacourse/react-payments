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
        />
        <Input
          type="number"
          ref={dueYearInputRef}
          value={dueDate.year}
          onChange={(e) => handleDueDate("year", e)}
        />
      </InputBox>
      </FormWrapper>
  )
}

export default CardDueDateForm