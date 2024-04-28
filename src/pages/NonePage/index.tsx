import React from 'react';
import { Link } from 'react-router-dom';

import SadEmoji from '../../assets/images/sadEmoji.svg';
import { PageLinkSection } from '../../components';

import styles from './style.module.css';

function NonePage() {
  return (
    <div className={styles.nonePage}>
      <section className={styles.errorSection}>
        <img src={SadEmoji} alt="오류 아이콘" />
        <p>존재하지 않는 페이지입니다.</p>
      </section>
      <PageLinkSection>
        <Link to="/">🏠 홈으로 돌아가기</Link>
      </PageLinkSection>
    </div>
  );
}

export default React.memo(NonePage);
