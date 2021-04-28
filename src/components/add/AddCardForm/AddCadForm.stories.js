import AddCardForm from '../../Add/AddCardForm';

export default {
  component: AddCardForm,
  title: 'AddCard/AddCardForm',
};

const Template = args => <AddCardForm {...args} />;

export const Default = Template.bind({});

Default.args = {};
