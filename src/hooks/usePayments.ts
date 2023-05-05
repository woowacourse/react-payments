import { useContext } from 'react';
import { PaymentsContext } from '../context/PaymentsContext';

export const usePayments = () => {
  const context = useContext(PaymentsContext);

  if (context === null) {
    throw new Error('usePayments 훅을 사용하기 위해선 PaymentsProvider를 사용해야 합니다.');
  }

  return context;
};
