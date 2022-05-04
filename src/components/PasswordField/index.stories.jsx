import { useState } from 'react'
import PasswordField from 'components/PasswordField'

const Template = () => {
  const [value, setValue] = useState({ firstPassword: '', secondPassword: '' })

  return <PasswordField password={value} setPassword={setValue} />
}

export default {
  title: 'PasswordField',
  component: PasswordField,
}

export const TwoPasswordField = Template.bind({})
