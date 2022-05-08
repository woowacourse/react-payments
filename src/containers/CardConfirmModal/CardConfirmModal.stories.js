import CardConfirmModal from 'containers/CardConfirmModal/CardConfirmModal';

export default {
  title: 'CardAddition/CardConfirmModal',
  component: CardConfirmModal,
  args: {
    cardData: {
      cardName: '준 카드',
      cardColor: '#547CE4',
      cardNumber: ['1233', '1231', '2312', '3123'],
      cardExpiration: ['12', '23'],
      cardOwner: '123',
    },
    onCloseModal: () => null,
    onSubmitForm: () => null,
  },
};

const Template = (args) => <CardConfirmModal {...args} />;

export const Example = Template.bind({});
