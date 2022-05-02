import CardUserNameField from '.';

export default {
  title: 'Component/CardUserNameField',
  component: CardUserNameField,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <CardUserNameField {...args} />;

export const Compy = Template.bind({});
Compy.args = {
  userName: '류콤피',
};
