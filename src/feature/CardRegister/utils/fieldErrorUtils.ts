// 순수 함수로 공통 로직 분리
// 응집도가 살짝 떨어진다는 아쉬움이 현재 있음..ㅠ
// 현재 파일만 봐서는 각 함수의 역할을 알기 힘들 것 같아서 해당 파일만 JSDoc 형식의 주석 추가

/**
 * 지정된 개수만큼 false로 초기화된 상태 플래그 배열을 생성
 * @param count - 생성할 배열의 길이 (예: 카드번호는 4칸이므로 4)
 * @returns 모든 요소가 false인 초기 배열
 */
export const createFlags = (count: number): boolean[] => Array.from({length: count}, () => false);

/**
 * 폼 필드의 개수에 맞춰 에러 상태를 추적할 초기 객체를 생성
 * @param fieldCount - 폼 필드의 칸 수
 * @returns errFlags(에러 여부 배열)와 errMessages(에러 메시지 배열)를 담은 객체
 */
export const createErrInfo = (fieldCount: number) => ({
  errFlags: createFlags(fieldCount),
  errMessages: Array(fieldCount).fill('') as string[],
});

/**
 * 특정 인덱스의 필드를 방문 처리한 새로운 상태 배열을 반환
 * @param prev - 이전 touched 상태 배열
 * @param index - 방문 처리할 필드의 인덱스
 * @returns 해당 인덱스만 true로 변경된 새로운 배열
 */
export const updateTouched = (prev: boolean[], index: number) =>
  // map을 사용하여 원본을 훼손하지 않고 방어적 복사본 생성
  prev.map((touched, i) => (i === index ? true : touched));

/**
 * 특정 인덱스의 에러 발생 여부와 메시지를 업데이트한 '새로운' 상태 객체를 반환합니다.
 * @param prevErrFlags - 이전 에러 플래그 배열
 * @param prevErrMessages - 이전 에러 메시지 배열
 * @param index - 유효성을 검증한 필드의 인덱스
 * @param hasErr - 에러 발생 여부
 * @param errMsg - 발생한 에러 메시지 (hasErr가 false면 빈 문자열로 초기화됨)
 * @returns 업데이트된 errFlags와 errMessages를 담은 새로운 참조 객체
 */
export const updateErrInfo = (
  prevErrFlags: boolean[],
  prevErrMessages: string[],
  index: number,
  hasErr: boolean,
  errMsg: string
) => {
  // 불변성을 지키기 위해 각각 map으로 새로운 배열을 생성
  const errFlags = prevErrFlags.map((prevHasErr, i) => (i === index ? hasErr : prevHasErr));
  const errMessages = prevErrMessages.map((prevErrMsg, i) => (i === index ? (hasErr ? errMsg : '') : prevErrMsg));

  return {errFlags, errMessages};
};
