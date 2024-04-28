import React, { ReactNode } from 'react';

import styles from './style.module.css';

interface PageLinkSectionProps {
  children: ReactNode;
}
function PageLinkSection(props: PageLinkSectionProps) {
  const { children } = props;
  return <section className={styles.linkSection}>{children}</section>;
}

export default PageLinkSection;
