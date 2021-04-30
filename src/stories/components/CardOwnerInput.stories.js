import CardOwnerInput from '../../components/cardCreation/cardOwnerInput/CardOwnerInput';

export default {
  title: 'Components/CardOwnerInput',
  component: CardOwnerInput,
};

const Template = args => <CardOwnerInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  setCardOwner: () => {},
  cardOwner: '브랜',
};
