import { useState } from 'react'
import OwnerField from 'components/OwnerField'

const Template = () => {
  const [value, setValue] = useState('')

  return <OwnerField owner={value} setOwner={setValue} />
}

export default {
  title: 'OwnerField',
  component: OwnerField,
}

export const DueDate = Template.bind({})
