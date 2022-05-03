import { useState } from 'react'
import CardNumberForm from 'components/CardNumberForm'

const Template = () => {
  const [value, setValue] = useState(['', '', '', ''])

  return <CardNumberForm cardNumbers={value} setCardNumbers={setValue} />
}

export default {
  title: 'CardNumberForm',
  component: CardNumberForm,
}

export const CardNumber = Template.bind({})
