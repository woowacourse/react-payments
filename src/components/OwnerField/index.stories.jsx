import { CardInfoProvider } from 'store/cardInfo-context'
import OwnerField from 'components/OwnerField'

const Template = () => {
  return (
    <CardInfoProvider>
      <OwnerField />
    </CardInfoProvider>
  )
}

export default {
  title: 'OwnerField',
  component: OwnerField,
}

export const DueDate = Template.bind({})
