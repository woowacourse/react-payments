import CardExpirationDate from './CardExpirationDate';

export default {
  title: 'CardAddPage/CardExpirationDate',
  component: CardExpirationDate,
};

const Template = (args) => <CardExpirationDate {...args} />;

export const CardExpirationDateInput = Template.bind({});
CardExpirationDateInput.args = {
  cardInfo: {
    month: '',
    year: '',
  },
};
