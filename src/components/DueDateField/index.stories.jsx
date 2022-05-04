import { useState } from 'react'
import DueDateField from 'components/DueDateField'

const Template = () => {
  const [value, setValue] = useState({ month: '', year: '' })
  const [error, setError] = useState({ dueMonth: false, dueYear: false })

  return (
    <DueDateField
      dueDate={value}
      setDueDate={setValue}
      error={error}
      setError={setError}
    />
  )
}

export default {
  title: 'DueDateField',
  component: DueDateField,
}

export const DueDate = Template.bind({})
