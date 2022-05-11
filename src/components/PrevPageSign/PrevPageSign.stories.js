import PrevPageSign from './PrevPageSign';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'CardAddPage/PrevPageSign',
  component: PrevPageSign,
  decorators: [
    (PrevPageSign) => (
      <MemoryRouter>
        <PrevPageSign />
      </MemoryRouter>
    ),
  ],
};

export const Default = () => <PrevPageSign />;
