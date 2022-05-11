import CardOwner from './CardOwner';
import CardInfoContextProvider from 'CardInfoContextProvider';

export default {
  title: 'CardAddPage/CardOwner',
  component: CardOwner,
  decorators: [
    (CardOwner) => (
      <CardInfoContextProvider>
        <CardOwner />
      </CardInfoContextProvider>
    ),
  ],
};

export const CardOwnerInput = () => <CardOwner />;
