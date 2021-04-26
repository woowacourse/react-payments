import { CardRegister } from '.';

export default {
  title: 'Component/CardRegister',
  component: CardRegister,
  argTypes: {},
};

const Template = (args) => <CardRegister {...args} />;

export const CardRegisterBody = Template.bind({});
CardRegisterBody.args = {};
