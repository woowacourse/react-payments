import styles from './Layout.module.css';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div className={styles.app}>
      <Outlet />
    </div>
  );
}
