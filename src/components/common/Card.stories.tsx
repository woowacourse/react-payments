import Card from './Card';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Card',
  component: Card,
};

export function NoValue() {
  return <Card cardCompany="" cardNumber={[]} ownerName="" expireDate={[]} />;
}

export function FullValue() {
  return (
    <Card
      cardCompany="쵸파은행"
      cardNumber={['1999', '1216', '9382', '0938']}
      ownerName="CHOPPER"
      expireDate={['12', '16']}
    />
  );
}
