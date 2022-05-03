import { useState } from 'react'
import PasswordForm from 'components/PasswordForm'

const Template = () => {
  const [value, setValue] = useState({ firstPassword: '', secondPassword: '' })

  return <PasswordForm password={value} setPassword={setValue} />
}

export default {
  title: 'PasswordForm',
  component: PasswordForm,
}

export const TwoPasswordForm = Template.bind({})
