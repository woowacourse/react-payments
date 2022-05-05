import React from 'react';
import NOT_FOUND from 'assets/not_found.png';
import HOME_BUTTON from 'assets/home_button.png';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="notFound-container mt-20">
      <img src={NOT_FOUND} className="notFound-image" />
      <p className="notFound-title">
        이용에 불편을 드려 죄송합니다.
        <br />
        서비스 개편으로 검색중인 페이지가 변경되어
        <br /> 현재 사용할 수 없습니다. <br />
        홈페이지로 이동하시어 서비스를 다시 이용해주세요.
      </p>
      <Link to="/">
        <img src={HOME_BUTTON} className="homeButton-image" />
      </Link>
    </div>
  );
};

export default NotFoundPage;
