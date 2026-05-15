// false로 채워진 상태 배열 생성
export const createFlags = (count: number): boolean[] => Array.from({length: count}, () => false);

// 필드 개수에 맞는 초기 에러 상태 생성
export const createErrInfo = (fieldCount: number) => ({
  errFlags: createFlags(fieldCount),
  errMessages: Array(fieldCount).fill('') as string[],
});

// 특정 필드를 방문 처리한 새 touched 배열 반환
export const updateTouched = (prev: boolean[], index: number) =>
  prev.map((touched, i) => (i === index ? true : touched));

// 특정 필드의 에러 여부와 메시지 갱신
export const updateErrInfo = (
  prevErrFlags: boolean[],
  prevErrMessages: string[],
  index: number,
  hasErr: boolean,
  errMsg: string
) => {
  const errFlags = prevErrFlags.map((prevHasErr, i) => (i === index ? hasErr : prevHasErr));
  const errMessages = prevErrMessages.map((prevErrMsg, i) => (i === index ? (hasErr ? errMsg : '') : prevErrMsg));

  return {errFlags, errMessages};
};
