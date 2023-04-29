import { renderHook } from '@testing-library/react';
import useInput from '../../hooks/useInput';
import {
  isValidCardNumber,
  isValidExpiredMonthFormat,
  isValidExpiredYearFormat,
  isValidOwnerName,
  isValidPassword,
  isValidSecurityCode,
} from '../../pages/AddCard/domain/dispatcher';
import { act } from 'react-dom/test-utils';
import { mockEventTarget } from '../utils/util';

describe('카드 번호 테스트', () => {
  it('카드 번호 Hook의 초기 상태는 INIT를 가진다.', () => {
    const { result } = renderHook(() => useInput(isValidCardNumber));
    expect(result.current.status).toBe('INIT');
  });
  it('유효한 카드 번호 입력이 들어오면, 카드 번호의 상태가 유효한 상태로 변경된다.', () => {
    const { result } = renderHook(() => useInput(isValidCardNumber));
    act(() => {
      result.current.onChange(mockEventTarget('1234') as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.status).toBe('VALID');
    expect(result.current.value).toBe('1234');
  });
  it('유효하지 않은 카드 번호 입력이 들어오면, 카드 번호의 상태가 유효하지 않는 상태로 변경된다.', () => {
    const { result } = renderHook(() => useInput(isValidCardNumber));
    act(() => {
      result.current.onChange(mockEventTarget('12354') as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.status).toBe('INVALID');
  });
});

describe('만료일(년도) 테스트', () => {
  it('만료일(년도) Hook의 초기 상태는 INIT를 가진다.', () => {
    const { result } = renderHook(() => useInput(isValidExpiredYearFormat));
    expect(result.current.status).toBe('INIT');
  });
  it('유효한 만료일(년도) 입력이 들어오면, 만료일(년도)의 상태가 유효한 상태로 변경된다.', () => {
    const { result } = renderHook(() => useInput(isValidExpiredYearFormat));
    act(() => {
      result.current.onChange(mockEventTarget('23') as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.status).toBe('VALID');
    expect(result.current.value).toBe('23');
  });
  it('유효하지 않은 만료일(년도) 입력이 들어오면, 만료일(년도)의 상태가 유효하지 않는 상태로 변경된다.', () => {
    const { result } = renderHook(() => useInput(isValidExpiredYearFormat));
    act(() => {
      result.current.onChange(mockEventTarget('a8') as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.status).toBe('INVALID');
  });
});

describe('만료일(월) 테스트', () => {
  it('만료일(월) Hook의 초기 상태는 INIT를 가진다.', () => {
    const { result } = renderHook(() => useInput(isValidExpiredMonthFormat));
    expect(result.current.status).toBe('INIT');
  });
  it('유효한 만료일(월) 입력이 들어오면, 만료일(월)의 상태가 유효한 상태로 변경된다.', () => {
    const { result } = renderHook(() => useInput(isValidExpiredMonthFormat));
    act(() => {
      result.current.onChange(mockEventTarget('12') as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.status).toBe('VALID');
    expect(result.current.value).toBe('12');
  });
  it('유효하지 않은 만료일(월) 입력이 들어오면, 만료일(월)의 상태가 유효하지 않는 상태로 변경된다.', () => {
    const { result } = renderHook(() => useInput(isValidExpiredMonthFormat));
    act(() => {
      result.current.onChange(mockEventTarget('13') as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.status).toBe('INVALID');
  });
});

describe('카드 소유자 이름 테스트', () => {
  it('카드 소유자 이름 Hook의 초기 상태는 INIT를 가진다.', () => {
    const { result } = renderHook(() => useInput(isValidOwnerName));
    expect(result.current.status).toBe('INIT');
  });
  it('카드 소유자 이름 입력이 들어오면, 카드 소유자 이름의 상태가 유효한 상태로 변경된다.', () => {
    const { result } = renderHook(() => useInput(isValidOwnerName));
    act(() => {
      result.current.onChange(mockEventTarget('YUNSEONG') as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.status).toBe('VALID');
    expect(result.current.value).toBe('YUNSEONG');
  });
  it('유효하지 않은 카드 소유자 이름 입력이 들어오면, 카드 소유자 이름의 상태가 유효하지 않는 상태로 변경된다.', () => {
    const { result } = renderHook(() => useInput(isValidOwnerName));
    act(() => {
      result.current.onChange(mockEventTarget('이윤성') as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.status).toBe('INVALID');
  });

  it('소유자 이름을 작성했다가 지웠을 경우에는, 카드 소유자 이름은 선택이므로 유효한 값이다.', () => {
    const { result } = renderHook(() => useInput(isValidOwnerName));
    act(() => {
      result.current.onChange(mockEventTarget('YUNSEONG') as React.ChangeEvent<HTMLInputElement>);
      result.current.onChange(mockEventTarget('') as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.status).toBe('VALID');
    expect(result.current.value).toBe('');
  });
});

describe('보안코드(CVC/CVV) 테스트', () => {
  it('보안코드(CVC/CVV) Hook의 초기 상태는 INIT를 가진다.', () => {
    const { result } = renderHook(() => useInput(isValidSecurityCode));
    expect(result.current.status).toBe('INIT');
  });
  it('보안코드(CVC/CVV) 입력이 들어오면, 보안코드(CVC/CVV)의 상태가 유효한 상태로 변경된다.', () => {
    const { result } = renderHook(() => useInput(isValidSecurityCode));
    act(() => {
      result.current.onChange(mockEventTarget('123') as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.status).toBe('VALID');
    expect(result.current.value).toBe('123');
  });
  it('유효하지 않은 보안코드(CVC/CVV) 입력이 들어오면, 보안코드(CVC/CVV)의 상태가 유효하지 않는 상태로 변경된다.', () => {
    const { result } = renderHook(() => useInput(isValidSecurityCode));
    act(() => {
      result.current.onChange(mockEventTarget('13') as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.status).toBe('INVALID');
  });
});

describe('카드 비밀번호 테스트', () => {
  it('카드 비밀번호 Hook의 초기 상태는 INIT를 가진다.', () => {
    const { result } = renderHook(() => useInput(isValidPassword));
    expect(result.current.status).toBe('INIT');
  });
  it('카드 비밀번호 입력이 들어오면, 카드 비밀번호의 상태가 유효한 상태로 변경된다.', () => {
    const { result } = renderHook(() => useInput(isValidPassword));
    act(() => {
      result.current.onChange(mockEventTarget('1') as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.status).toBe('VALID');
    expect(result.current.value).toBe('1');
  });
  it('유효하지 않은 카드 비밀번호 입력이 들어오면, 카드 비밀번호의 상태가 유효하지 않는 상태로 변경된다.', () => {
    const { result } = renderHook(() => useInput(isValidPassword));
    act(() => {
      result.current.onChange(mockEventTarget('a') as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.status).toBe('INVALID');
  });
});
