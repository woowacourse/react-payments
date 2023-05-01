/* eslint-disable no-undef */
import { act, renderHook } from '@testing-library/react';
import { ReactNode } from 'react';
import useCreditCardForm from './useCreditCardForm';
import CardFormProvider from '../CardFormProvider';

test('useCreditCardForm hook 테스트', () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <CardFormProvider>{children}</CardFormProvider>
  );
  const { result } = renderHook(() => useCreditCardForm(), { wrapper });

  act(() => {
    result.current.setCreditCardForm({
      ...result.current.creditCardForm,
      expiry: '1234',
    });
  });

  expect(result.current.creditCardForm.expiry).toStrictEqual('1234');

  act(() => {
    result.current.initCreditCardForm();
  });

  expect(result.current.creditCardForm.expiry).toStrictEqual('');
});
