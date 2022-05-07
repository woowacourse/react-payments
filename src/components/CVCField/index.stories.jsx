import { CardInfoProvider } from 'store/cardInfo-context'
import CVCField from 'components/CVCField'

const Template = () => {
  return (
    <CardInfoProvider>
      <CVCField />
    </CardInfoProvider>
  )
}

export default {
  title: 'CVCField',
  component: CVCField,
}

export const CVC = Template.bind({})
