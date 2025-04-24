import { useEffect, useState } from 'react';

function useCardInfoValidation(cardInfo: CardInfo) {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // cardInfo의 모든 값이
    // 0 또는 일정 길이 이상인지 확인
    // 그리고 추가적인 조건이 있을 경우 검사
  }, [cardInfo]);
}

export default useCardInfoValidation;
