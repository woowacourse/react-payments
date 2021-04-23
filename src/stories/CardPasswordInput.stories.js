import CardPasswordInput from '../components/cardCreation/cardPasswordInput/CardPasswordInput';

export default {
  title: 'CardPasswordInput',
  component: CardPasswordInput,
};

const Template = args => <CardPasswordInput {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Custom = Template.bind({});
Custom.args = {};
