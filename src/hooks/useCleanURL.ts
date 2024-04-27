import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useCleanURL() {
  const location = useLocation();
  /**
   * url 변경 시 실행될 함수
   * 카드 등록 페이지로 돌아오거나 새로고침 시 url에 form의 입력 필드의 값들이 포함되는 오류를 수정하기 위해 사용
   */
  const cleanUpURL = useCallback(() => {
    const { search } = location;
    // 쿼리 문자열이 있는 경우
    if (search) {
      const newURL = window.location.origin + window.location.pathname;
      window.history.replaceState(null, '', newURL);
    }
  }, []);

  useEffect(() => {
    cleanUpURL();
  }, [cleanUpURL]);
}

export default useCleanURL;
