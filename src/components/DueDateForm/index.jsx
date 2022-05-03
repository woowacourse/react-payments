import { useRef } from 'react'

import Form from 'components/common/Form'
import { isInvalidDueDate } from 'validation'
import { MONTH, DUE_DATE } from 'constant'

function DueDateForm({ dueDate, setDueDate, error, setError }) {
  const dueYearInputRef = useRef()

  const handleDueDateChange = ({ target: { value } }, key) => {
    if (isInvalidDueDate(value)) return

    setDueDate((prev) => {
      const newState = { ...prev }
      newState[key] = value
      return newState
    })

    if (key === 'month') {
      setError((prev) => {
        const newState = { ...prev }
        newState.dueMonth = +value > MONTH.MAX || +value < MONTH.MIN
        return newState
      })
    } else {
      const currentYear = new Date().getFullYear().toString().slice(2)
      setError((prev) => {
        const newState = { ...prev }
        newState.dueYear = +value < currentYear
        return newState
      })
    }

    if (value.length >= DUE_DATE.UNIT_LENGTH) {
      dueYearInputRef.current.focus()
    }
  }

  return (
    <Form
      label="만료일"
      size={50}
      inputInfo={[
        {
          type: 'number',
          id: 'due-month',
          value: dueDate.month,
          placeholder: 'MM',
          key: 'month',
        },
        {
          type: 'number',
          id: 'due-year',
          value: dueDate.year,
          ref: dueYearInputRef,
          placeholder: 'YY',
          key: 'year',
        },
      ]}
      error={error.dueMonth || error.dueYear}
      onChange={handleDueDateChange}
    />
  )
}

export default DueDateForm
