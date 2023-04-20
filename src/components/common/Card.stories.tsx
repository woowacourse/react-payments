import Card from './Card';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Card',
  component: Card,
};

export function Default() {
  return <Card cardNumber={['1000', '1000', '1000', '1000']} ownerName="SANGWON" expireDate={['09', '17']} />;
}

export function NameLee() {
  return <Card cardNumber={['9123', '8274', '9382', '0938']} ownerName="LEE" expireDate={['12', '16']} />;
}

export function NotHaveInfo() {
  return <Card expireDate={[]} cardNumber={[]} ownerName={''} />;
}
