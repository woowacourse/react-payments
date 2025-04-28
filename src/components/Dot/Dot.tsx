import type { ComponentProps } from "react";
import styles from "./Dot.module.css";

interface DotProps extends ComponentProps<"span"> {}
function Dot({ style }: DotProps) {
  return <span className={styles.dot} style={style} />;
}

export default Dot;
