import CardOwnerInput from '../components/cardCreation/cardOwnerInput/CardOwnerInput';

export default {
  title: 'CardOwnerInput',
  component: CardOwnerInput,
};

const Template = args => <CardOwnerInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
