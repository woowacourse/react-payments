import CardPassword from './CardPassword';

export default {
  title: 'CardAddPage/CardPassword',
  component: CardPassword,
};

const Template = (args) => <CardPassword {...args} />;

export const CardPasswordInput = Template.bind({});
CardPasswordInput.args = {
  cardInfo: {
    password1: '',
    password2: '',
  },
};
