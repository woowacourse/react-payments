import React from 'react';
import Page from '..';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <Page>
      <div>
        <Link to="./add">카드 추가하기</Link>
      </div>
      <div>
        <Link to="./list">카드 목록보기</Link>
      </div>
    </Page>
  );
}

export default Landing;
