import { useState } from 'react';
import NicknameModal from '.';
import { CARD_BRAND } from '../../../../constants/addCardForm';

export default {
  component: NicknameModal,
  title: 'Modal/NicknameModal',
};

const Template = args => {
  const [nickname, setNickname] = useState('');

  return <NicknameModal {...args} nickname={nickname} setNickname={setNickname} />;
};

export const Default = Template.bind({});

Default.args = {
  cardBrand: {
    name: CARD_BRAND[0].name,
    color: CARD_BRAND[0].color,
  },
  cardNumber: '1234-1234-1234-1234',
  expDate: { month: '01', year: '21' },
  ownerName: 'FANO',
};
