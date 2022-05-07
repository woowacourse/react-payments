import { CardInfoProvider } from 'store/cardInfo-context'
import DueDateField from 'components/DueDateField'

const Template = () => {
  return (
    <CardInfoProvider>
      <DueDateField />
    </CardInfoProvider>
  )
}

export default {
  title: 'DueDateField',
  component: DueDateField,
}

export const DueDate = Template.bind({})
