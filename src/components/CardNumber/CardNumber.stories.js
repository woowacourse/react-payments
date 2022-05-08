import CardNumber from './CardNumber';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'CardAddPage/CardNumber',
  component: CardNumber,
  decorators: [
    (CardNumber) => (
      <MemoryRouter>
        <CardNumber />
      </MemoryRouter>
    ),
  ],
};

export const CardNumberInput = () => <CardNumber />;
