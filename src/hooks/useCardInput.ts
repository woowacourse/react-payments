import { useEffect, useState } from 'react';

function useCardInput<V, E>(props: {
  initialValue: V;
  initialError: E;
  validateValue: (value: V) => { newError: E };
  updatedInfo: (value: V, error: E) => void;
  handleGoNextFormStep?: (error: E) => void;
}) {
  const {
    initialValue,
    initialError,
    validateValue,
    updatedInfo,
    handleGoNextFormStep,
  } = props;

  const [value, setValue] = useState<V>(initialValue);
  const [error, setError] = useState<E>(initialError);
  /**
   * value에 대한 유효성 검사를 진행해, 그 결과값에 따라 error 상태를 업데이트하는 함수
   * @returns
   */
  const handleError = () => {
    const { newError } = validateValue(value);
    setError(newError);

    return newError;
  };
  /**
   * value 값이 카드 정보에 유효한 데이터 값인 경우, cardInfo 상태를 업데이트하는 함수
   * @param e :value에 대한 유효성 검사 결과
   */
  const handleUpdateCardInfo = (e: E) => {
    updatedInfo(value, e);
  };

  useEffect(() => {
    const newError = handleError();
    handleUpdateCardInfo(newError);
    if (handleGoNextFormStep) handleGoNextFormStep(newError);
  }, [value]);

  return { value, setValue, error };
}

export default useCardInput;
