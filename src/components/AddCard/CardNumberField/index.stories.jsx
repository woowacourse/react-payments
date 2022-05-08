import CardNumberField from 'components/CardNumberField'

import { CardInfoProvider } from 'store/cardInfo-context'

const Template = () => {
  return (
    <CardInfoProvider>
      <CardNumberField />
    </CardInfoProvider>
  )
}

export default {
  title: 'CardNumberField',
  component: CardNumberField,
}

export const CardNumber = Template.bind({})
