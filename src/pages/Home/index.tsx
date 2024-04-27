import React from 'react';
import { Link } from 'react-router-dom';

import ThePlanet from '../../assets/images/행성이.png';
import { PageLinkSection } from '../../components';
import { PATH } from '../../constants';

import styles from './style.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.greeting}>
        <img src={ThePlanet} alt="행성이" />
        <p>안녕하세요. 우테코 월렛입니다.</p>
        <p>카드를 등록하고 싶다면 아래 버튼을 클릭해주세요.</p>
      </section>
      <PageLinkSection>
        <Link to={PATH.cardEnrollment}>💳 카드 등록페이지로 이동하기</Link>
      </PageLinkSection>
    </div>
  );
}

export default React.memo(Home);
