import { BrowserRouter } from 'react-router-dom';
import CardList from '.';

export default {
  title: 'Page/CardList',
  component: CardList,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <CardList {...args} />;

export const CardListPage = Template.bind({});
CardListPage.args = {};
