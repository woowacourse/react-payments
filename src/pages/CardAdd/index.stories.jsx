import CardAdd from '.';
import 'index.css';

export default {
  title: 'Page/CardAdd',
  component: CardAdd,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <CardAdd {...args} />;

export const CardAddPage = Template.bind({});
CardAddPage.args = {};
