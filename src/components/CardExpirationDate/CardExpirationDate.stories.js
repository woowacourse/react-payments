import CardExpirationDate from './CardExpirationDate';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'CardAddPage/CardExpirationDate',
  component: CardExpirationDate,
  decorators: [
    (CardExpirationDate) => (
      <MemoryRouter>
        <CardExpirationDate />
      </MemoryRouter>
    ),
  ],
};

export const CardExpirationDateInput = () => <CardExpirationDate />;
