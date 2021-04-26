import NicknameModal from '.';
import CARD_DATA from '../../../constants/cardData';

export default {
  component: NicknameModal,
  title: 'Form/NicknameModal',
};

const Template = args => <NicknameModal {...args} />;

export const Default = Template.bind({});

Default.args = {
  cardBrand: {
    name: CARD_DATA[0].name,
    color: CARD_DATA[0].color,
  },
  cardNumber: ['1234', '1234', '1234', '1234'],
  expDate: { month: '01', year: '21' },
  ownerName: 'FANO',
};
