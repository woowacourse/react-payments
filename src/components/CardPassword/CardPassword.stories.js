import CardPassword from './CardPassword';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'CardAddPage/CardPassword',
  component: CardPassword,
  decorators: [
    (CardPassword) => (
      <MemoryRouter>
        <CardPassword />
      </MemoryRouter>
    ),
  ],
};

export const CardPasswordsInput = () => <CardPassword />;
