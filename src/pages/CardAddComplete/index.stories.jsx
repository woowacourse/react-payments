import { BrowserRouter } from 'react-router-dom';
import CardAddComplete from '.';

export default {
  title: 'Page/CardAddComplete',
  component: CardAddComplete,
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

const Template = (args) => <CardAddComplete {...args} />;

export const CardAddCompletePage = Template.bind({});
CardAddCompletePage.args = {};
