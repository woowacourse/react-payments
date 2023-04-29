import { renderHook } from '@testing-library/react';
import useInput from '../../hooks/useInput';
import { isValidCardNumber, isValidExpiredYearFormat } from '../../pages/AddCard/domain/dispatcher';
import { act } from 'react-dom/test-utils';
import { mockEventTarget } from '../utils/util';

describe('카드 번호 테스트', () => {
  it('카드 번호 Hook의 초기 상태는 INIT를 가진다.', () => {
    const { result } = renderHook(() => useInput(isValidCardNumber));
    expect(result.current.status).toBe('INIT');
  });
  it('유효한 카드 번호 입력이 들어오면, 카드번호의 상태가 유효한 상태로 변경된다.', () => {
    const { result } = renderHook(() => useInput(isValidCardNumber));
    act(() => {
      result.current.onChange(mockEventTarget('1234') as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.status).toBe('VALID');
    expect(result.current.value).toBe('1234');
  });
  it('유효하지 않은 카드 번호 입력이 들어오면, 카드번호의 상태가 유효하지 않는 상태로 변경된다.', () => {
    const { result } = renderHook(() => useInput(isValidCardNumber));
    act(() => {
      result.current.onChange(mockEventTarget('12354') as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.status).toBe('INVALID');
  });
});

describe('만료일(년도) 테스트', () => {
  it('카드 번호 Hook의 초기 상태는 INIT를 가진다.', () => {
    const { result } = renderHook(() => useInput(isValidExpiredYearFormat));
    expect(result.current.status).toBe('INIT');
  });
  it('유효한 카드 번호 입력이 들어오면, 카드번호의 상태가 유효한 상태로 변경된다.', () => {
    const { result } = renderHook(() => useInput(isValidExpiredYearFormat));
    act(() => {
      result.current.onChange(mockEventTarget('23') as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.status).toBe('VALID');
    expect(result.current.value).toBe('23');
  });
  it('유효하지 않은 카드 번호 입력이 들어오면, 카드번호의 상태가 유효하지 않는 상태로 변경된다.', () => {
    const { result } = renderHook(() => useInput(isValidExpiredYearFormat));
    act(() => {
      result.current.onChange(mockEventTarget('a8') as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.status).toBe('INVALID');
  });
});
