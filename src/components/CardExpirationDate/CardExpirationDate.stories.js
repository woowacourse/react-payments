import CardExpirationDate from './CardExpirationDate';
import CardInfoContextProvider from 'CardInfoContextProvider';

export default {
  title: 'CardAddPage/CardExpirationDate',
  component: CardExpirationDate,
  decorators: [
    (CardExpirationDate) => (
      <CardInfoContextProvider>
        <CardExpirationDate />
      </CardInfoContextProvider>
    ),
  ],
};

export const CardExpirationDateInput = () => <CardExpirationDate />;
