import { renderHook } from '@testing-library/react';
import { createContext } from 'react';
import useWrappingContext from './useWrappingContext';

describe('useWrappingContext 훅 검사', () => {
  test('useWrappingContext의 인자로 null이 들어가면 에러를 발생시킨다.', () => {
    const Store = createContext<number | null>(null);

    expect(() => {
      renderHook(() => useWrappingContext(Store));
    }).toThrow();
  });
});
