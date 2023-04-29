import { act, renderHook } from '@testing-library/react';
import useModal from './useModal';

describe('useModal 훅 검사', () => {
  test('초기의 isModalOpen은 false이다.', () => {
    const { result } = renderHook(() => useModal());
    expect(result.current.isModalOpen).toBe(false);
  });
  test('openModal, closeModal을 실행하면 isModalOpen은 각각 true, false가 된다.', () => {
    const { result } = renderHook(() => useModal());
    act(() => {
      result.current.openModal();
    });

    expect(result.current.isModalOpen).toBe(true);

    act(() => {
      result.current.closeModal();
    });

    expect(result.current.isModalOpen).toBe(false);
  });
});
