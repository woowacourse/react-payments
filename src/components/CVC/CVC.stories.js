import CVC from './CVC';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'CardAddPage/CVC',
  component: CVC,
  decorators: [
    (CVC) => (
      <MemoryRouter>
        <CVC />
      </MemoryRouter>
    ),
  ],
};

export const CVCInput = () => <CVC />;
