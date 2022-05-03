import { useState } from 'react'
import OwnerForm from 'components/OwnerForm'

const Template = () => {
  const [value, setValue] = useState('')

  return <OwnerForm owner={value} setOwner={setValue} />
}

export default {
  title: 'OwnerForm',
  component: OwnerForm,
}

export const DueDate = Template.bind({})
