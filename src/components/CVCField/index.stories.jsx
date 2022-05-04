import { useState } from 'react'
import CVCField from 'components/CVCField'

const Template = () => {
  const [value, setValue] = useState('')

  return <CVCField cvc={value} setCvc={setValue} />
}

export default {
  title: 'CVCField',
  component: CVCField,
}

export const CVC = Template.bind({})
