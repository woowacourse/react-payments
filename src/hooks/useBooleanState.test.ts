import { act, renderHook } from '@testing-library/react';
import useBooleanState from './useBooleanState';

describe('useBooleanState 훅 검사', () => {
  test('초기의 value는 값을 지정해주어야 한다.', () => {
    const { result } = renderHook(() => useBooleanState(false));

    expect(result.current.value).toBe(false);
  });
  test('setTrue, setFalse을 실행하면 value는 각각 true, false가 된다.', () => {
    const { result } = renderHook(() => useBooleanState(false));

    act(() => {
      result.current.setTrue();
    });

    expect(result.current.value).toBe(true);

    act(() => {
      result.current.setFalse();
    });

    expect(result.current.value).toBe(false);
  });

  test('toggle을 실행하면 value의 true, false가 반대로 된다.', () => {
    const { result } = renderHook(() => useBooleanState(false));

    act(() => {
      result.current.toggle();
    });

    expect(result.current.value).toBe(true);
  });
});
