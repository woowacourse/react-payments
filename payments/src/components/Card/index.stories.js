import Card from '.';

export default {
  title: 'Card',
  component: Card,
};

export const card = () => (
  <Card
    state={{
      cardNumber: ['1234', '5678', '1234', '1234'],
      expiredDate: ['12', '12'],
      ownerName: '비녀',
      secureCode: '123',
    }}
    needBack={true}
  />
);
