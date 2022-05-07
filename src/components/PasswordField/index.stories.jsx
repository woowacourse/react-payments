import { CardInfoProvider } from 'store/cardInfo-context'
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
