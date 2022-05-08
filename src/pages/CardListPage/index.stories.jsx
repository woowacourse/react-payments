import { BrowserRouter } from 'react-router-dom'
import CardListPage from 'pages/CardListPage'

import { CardInfoProvider } from 'context/cardInfo-context'

const Template = () => {
  return (
    <BrowserRouter>
      <CardInfoProvider>
        <CardListPage />
      </CardInfoProvider>
    </BrowserRouter>
  )
}

export default {
  title: 'CardListPage',
  component: CardListPage,
}

export const Default = Template.bind({})
