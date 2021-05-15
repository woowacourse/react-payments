import EditNicknameForm from './EditNicknameForm';

export default {
  component: EditNicknameForm,
  title: 'Edit/EditNicknameForm',
};

const Template = args => {
  return <EditNicknameForm {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  card: {
    id: '',
    createdAt: '1234',
    cardBrand: {
      color: '#aaaaaa',
      name: '현대',
    },
    ownerName: '',
    password: '1234-1234-1234-1234',
    cardNumber: '',
    expDate: '',
    CVC: '',
  },
};
