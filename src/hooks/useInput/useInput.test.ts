/* eslint-disable @typescript-eslint/no-unused-vars */

import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';

import creditCardValidation from '@Domains/creditCard/creditCardValidation';

import useInput from '@Hooks/useInput';

const { numberValidationFns, ownerValidationFns } = creditCardValidation.getValidationFns();

describe('useInput hook 테스트', () => {
  it('value의 초기값이 제대로 동작하는지 확인', () => {
    const {
      result: {
        current: [value1],
      },
    } = renderHook(() => useInput<string>('', numberValidationFns));

    expect(value1).toBe('');

    const {
      result: {
        current: [value2],
      },
    } = renderHook(() => useInput<string>('NOAH', ownerValidationFns));

    expect(value2).toBe('NOAH');
  });

  it('errorMessage의 초기값이 null인지 확인', () => {
    const {
      result: {
        current: [value, updateValue, errorMessage],
      },
    } = renderHook(() => useInput<string>('', numberValidationFns));

    expect(errorMessage).toBe(null);
  });

  it('value 업데이트가 잘 동작하는 확인', () => {
    const {
      result: {
        current: [value, updateValue, errorMessage],
      },
    } = renderHook(() => useInput<string>('', numberValidationFns));

    act(() => {
      updateValue('3');
    });

    // 어떤 이유로 act 함수가 실행되고 있지 않은지 파악하기
    expect(value).toBe('3');
  });
});
