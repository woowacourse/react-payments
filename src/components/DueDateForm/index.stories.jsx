import { useState } from 'react'
import DueDateForm from 'components/DueDateForm'

const Template = () => {
  const [value, setValue] = useState({ month: '', year: '' })
  const [error, setError] = useState({ dueMonth: false, dueYear: false })

  return (
    <DueDateForm
      dueDate={value}
      setDueDate={setValue}
      error={error}
      setError={setError}
    />
  )
}

export default {
  title: 'DueDateForm',
  component: DueDateForm,
}

export const DueDate = Template.bind({})
