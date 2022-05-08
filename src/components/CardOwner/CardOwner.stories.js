import { MemoryRouter } from 'react-router-dom';
import CardOwner from './CardOwner';

export default {
  title: 'CardAddPage/CardOwner',
  component: CardOwner,
  decorators: [
    (CardOwner) => (
      <MemoryRouter>
        <CardOwner />
      </MemoryRouter>
    ),
  ],
};

export const CardOwnerInput = () => <CardOwner />;
