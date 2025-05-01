import styles from "./MobileLayout.module.css";
import { ReactNode } from "react";

interface MobileLayoutProps {
  children: ReactNode;
}

function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className={styles.container}>
      <div className={styles.sidePanel}>
        <span>페이먼츠 미션 2단계</span>
      </div>
      <div className={styles.main}>{children}</div>
      <div className={styles.sidePanel}>
        <span>ㅇ_ㅇ</span>
      </div>
    </div>
  );
}

export default MobileLayout;
