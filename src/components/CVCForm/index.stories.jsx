import { useState } from 'react'
import CVCForm from 'components/CVCForm'

const Template = () => {
  const [value, setValue] = useState('')

  return <CVCForm cvc={value} setCvc={setValue} />
}

export default {
  title: 'CVCForm',
  component: CVCForm,
}

export const CVC = Template.bind({})
