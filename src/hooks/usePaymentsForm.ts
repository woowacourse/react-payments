import { useContext } from 'react';
import { PaymentsFormContext } from '../context/PaymentsFormContext';

export const usePaymentsForm = () => {
  const context = useContext(PaymentsFormContext);

  if (context === null) {
    throw new Error('usePaymentsForm 훅을 사용하기 위해선 PaymentsFormProvider를 사용해야 합니다.');
  }

  return context;
};
