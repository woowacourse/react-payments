import CardPasswordInput from '../../components/cardCreation/cardPasswordInput/CardPasswordInput';

export default {
  title: 'Components/CardPasswordInput',
  component: CardPasswordInput,
};

const Template = args => <CardPasswordInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  setCardPassword: () => {},
  isValidCardPassword: true,
  cardPassword: { 0: '1', 1: '1' },
};
