import { BrowserRouter } from 'react-router-dom';
import CardAdd from '.';

export default {
  title: 'Page/CardAdd',
  component: CardAdd,
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

const Template = (args) => <CardAdd {...args} />;

export const CardAddPage = Template.bind({});
CardAddPage.args = {};
