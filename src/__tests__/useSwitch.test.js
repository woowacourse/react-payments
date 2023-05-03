import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';

import useSwitch from '../hooks/useSwitch';

test('useSwitch hook 테스트', () => {
  // useSwitch 훅을 사용한다. 초기 상태 값을 false로 설정한다
  const { result } = renderHook(() => useSwitch(false));

  // 상태 값의 초기 상태 값은 false이다
  expect(result.current.state).toBe(false);

  // state의 상태 값을 true로 변경한다
  act(() => result.current.turnOn());

  expect(result.current.state).toBe(true);

  // state의 상태 값을 false로 변경한다
  act(() => result.current.turnOff());

  expect(result.current.state).toBe(false);
});
