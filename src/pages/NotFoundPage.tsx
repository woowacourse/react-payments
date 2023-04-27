import React from 'react';
import { useNavigate } from 'react-router-dom';

import { LOCATION } from '../utils/constants';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate(LOCATION.CARD_LIST_PAGE);
  };
  return (
    <>
      <div>찾을 수 없는 페이지입니다.</div>
      <div>잘못된 경로를 이용하셨어요 :{')'}</div>

      <button type="button" onClick={backToHome}>
        홈으로 이동
      </button>
    </>
  );
};

export default NotFoundPage;
