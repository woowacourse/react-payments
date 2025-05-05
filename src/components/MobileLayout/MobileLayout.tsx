import styles from './MobileLayout.module.css';
import { Outlet } from 'react-router';

export default function MobileLayout() {
  return (
    <div className={styles.app}>
      <Outlet />
    </div>
  );
}
