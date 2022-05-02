import AddCardForm from './AddCardForm';

export default {
  title: 'AddCardForm',
  component: AddCardForm,
};

const Template = (args) => <AddCardForm {...args} />;

export const CardForm = Template.bind({});

CardForm.args = {
  updateCard: () => {},
};
