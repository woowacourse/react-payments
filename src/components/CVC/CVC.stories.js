import CVC from './CVC';
import CardInfoContextProvider from 'CardInfoContextProvider';

export default {
  title: 'CardAddPage/CVC',
  component: CVC,
  decorators: [
    (CVC) => (
      <CardInfoContextProvider>
        <CVC />
      </CardInfoContextProvider>
    ),
  ],
};

export const CVCInput = () => <CVC />;
