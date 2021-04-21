import Header from './Header';

export default {
  title: 'Payments/Header',
  component: Header,
  argTypes: {
    text: {
      control: 'text',
    },
  },
  onClickBackButton: {},
};

const Template = (args) => <Header {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  text: '헤더',
};
