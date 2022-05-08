import { BrowserRouter } from 'react-router-dom'
import CardListPage from 'pages/CardListPage'

const Template = () => {
  return (
    <BrowserRouter>
      <CardListPage />
    </BrowserRouter>
  )
}

export default {
  title: 'CardListPage',
  component: CardListPage,
}

export const Default = Template.bind({})
