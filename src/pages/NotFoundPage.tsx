import React from 'react';
import { useNavigate } from 'react-router-dom';

import notFoundImage from '../asset/404.png';
import { LOCATION } from '../utils/constants';
import './NotFoundPage.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate(LOCATION.CARD_LIST_PAGE);
  };
  return (
    <div className="not-found-main">
      <img className="not-found-image" alt="404" src={notFoundImage} />
      <br />
      <div>찾을 수 없는 페이지입니다.</div>
      <div>잘못된 경로를 이용하셨어요 :{')'}</div>
      <button className="home-button" type="button" onClick={backToHome}>
        홈으로 이동
      </button>
    </div>
  );
};

export default NotFoundPage;
