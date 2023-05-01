/* eslint-disable @typescript-eslint/no-unused-vars */

import { renderHook } from '@testing-library/react-hooks';

import useCreditCardValidation from '.';

describe('useCreditCardValidation hook 테스트', () => {
  it.each([[{ numbers: '123412341234123' }], [{ numbers: '12341234123412341' }]])(
    '16자가 아닌 신용카드 번호 입력시 유효성 확인',
    (numbers) => {
      const {
        result: { current: isValid },
      } = renderHook(() => useCreditCardValidation(numbers, []));

      expect(isValid).toBe(false);
    },
  );

  it.each([[{ expiry: '12/234' }], [{ expiry: '12/2' }]])('5자가 아닌 만료일 입력시 유효성 확인', (expires) => {
    const {
      result: { current: isValid },
    } = renderHook(() => useCreditCardValidation(expires, []));

    expect(isValid).toBe(false);
  });

  it('에러메시지가 있는 경우 유효성 확인', () => {
    const {
      result: { current: isValid },
    } = renderHook(() => useCreditCardValidation({}, ['something']));

    expect(isValid).toBe(false);
  });
});
