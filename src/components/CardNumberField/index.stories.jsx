import { useState } from 'react'
import CardNumberField from 'components/CardNumberField'

const Template = () => {
  const [value, setValue] = useState(['', '', '', ''])

  return <CardNumberField cardNumbers={value} setCardNumbers={setValue} />
}

export default {
  title: 'CardNumberField',
  component: CardNumberField,
}

export const CardNumber = Template.bind({})
