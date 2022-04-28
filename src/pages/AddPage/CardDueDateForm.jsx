import InputBox from '../../components/InputBox'
import { Input } from '../../components/Input/style'
import { FormWrapper } from './style'
import { useState } from 'react'

function CardDueDateForm({dueDate, handleDueDate, dueYearInputRef}) {
  const [error, setError] = useState({month: false, year: false})
  
  const handleMonthError = (e) => {
    setError({...error, month: e.target.value>12 || e.target.value<1});
  }

  const handleYearError = (e) => {
    setError({...error, year: e.target.value<22})
  }

  return (
    <FormWrapper>
      <label>만료일</label>
      <InputBox size="50" error={error.month || error.year}>
        <Input
          type="number"
          value={dueDate.month}
          onChange={(e) => {handleDueDate("month", e); handleMonthError(e)}}
          placeholder="MM"
        />
        <span>/</span>
        <Input
          type="number"
          ref={dueYearInputRef}
          value={dueDate.year}
          onChange={(e) => {handleDueDate("year", e); handleYearError(e)}}
          placeholder="YY"
        />
      </InputBox>
    </FormWrapper>
  )
}

export default CardDueDateForm