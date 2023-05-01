/* eslint-disable no-undef */
import { act, renderHook } from '@testing-library/react';
import { ChangeEvent, ReactNode } from 'react';
import useCreditCardForm from './useCreditCardForm';
import CardFormProvider from '../CardFormProvider';

test('useCreditCardForm hook 테스트', () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <CardFormProvider>{children}</CardFormProvider>
  );
  const { result } = renderHook(() => useCreditCardForm(), { wrapper });

  act(() => {
    result.current.handleCreditCardExpiryChange(
      { target: { value: '1234' } } as ChangeEvent<HTMLInputElement>
    );
  });

  expect(result.current.creditCardForm.expiry).toStrictEqual('1234');

  act(() => {
    result.current.initCreditCardForm();
  });

  expect(result.current.creditCardForm.expiry).toStrictEqual('');
});
