import { CardInfoProvider } from 'context/cardInfo-context'
import PasswordField from 'components/PasswordField'

const Template = () => {
  return (
    <CardInfoProvider>
      <PasswordField />
    </CardInfoProvider>
  )
}

export default {
  title: 'PasswordField',
  component: PasswordField,
}

export const TwoPasswordField = Template.bind({})
