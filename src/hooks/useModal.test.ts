import { act, renderHook } from '@testing-library/react';
import useModal from './useModal';

describe('모달 테스트', () => {
  test('모달 닫기', () => {
    const { result } = renderHook(() => useModal(true));

    expect(result.current.isModalOpen).toBe(true);

    act(() => result.current.closeModal());

    expect(result.current.isModalOpen).toBe(false);
  });

  test('모달 열기', () => {
    const { result } = renderHook(() => useModal(false));

    expect(result.current.isModalOpen).toBe(false);

    act(() => result.current.openModal());

    expect(result.current.isModalOpen).toBe(true);
  });
});
