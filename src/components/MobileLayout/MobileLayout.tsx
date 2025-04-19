import styles from "./MobileLayout.module.css";
import { ReactNode } from "react";

interface MobileLayoutProps {
  children: ReactNode;
}

function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className={styles.container}>
      <div className={styles.sidePanel}>페이먼츠 미션 2단계</div>
      <div className={styles.main}>{children}</div>
      <div className={styles.sidePanel}>ㅇ_ㅇ</div>
    </div>
  );
}

export default MobileLayout;
