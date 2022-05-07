import React from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../components/commons/PageTemplate';

function Landing() {
  return (
    <PageTemplate>
      <Link to="./list/add">
        <div className="tab-box flex-center">카드 추가하기</div>
      </Link>
      <Link to="./list">
        <div className="tab-box flex-center">카드 목록보기</div>
      </Link>
    </PageTemplate>
  );
}

export default Landing;
