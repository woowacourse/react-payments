import { ReactNode } from "react";
import styles from "./FullWidthFixed.module.css";

interface Props {
  children: ReactNode;
}

function FullWidthFixed({ children }: Props) {
  return <div className={styles.fullWidthFixedWrapper}>{children}</div>;
}

export default FullWidthFixed;
