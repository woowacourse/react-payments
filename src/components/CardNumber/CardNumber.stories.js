import CardNumber from './CardNumber';
import CardInfoContextProvider from 'CardInfoContextProvider';

export default {
  title: 'CardAddPage/CardNumber',
  component: CardNumber,
  decorators: [
    (CardNumber) => (
      <CardInfoContextProvider>
        <CardNumber />
      </CardInfoContextProvider>
    ),
  ],
};

export const CardNumberInput = () => <CardNumber />;
