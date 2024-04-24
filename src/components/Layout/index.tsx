import { Outlet } from 'react-router-dom';

import styles from './style.module.css';

function Layout() {
  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  );
}

export default Layout;
