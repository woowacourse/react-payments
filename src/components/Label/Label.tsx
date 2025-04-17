import type { ComponentProps, PropsWithChildren } from "react";
import styles from "./Label.module.css";

interface LabelProps extends PropsWithChildren, ComponentProps<"label"> {
  isHidden?: boolean;
}

function Label({ isHidden, children, ...props }: LabelProps) {
  return (
    <label
      {...props}
      className={`${styles.label} ${isHidden ? styles.hidden : ""}`}
    >
      {children}
    </label>
  );
}

export default Label;
