import { ReactNode } from "react";
import ShelfHeader from "../../ShelfHeader/ShelfHeader";
import styles from "./ShelfSection.module.css";

const ShelfSection = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) => {
  return (
    <div className={styles.shelf__section}>
      <ShelfHeader title={title} description={description} />
      {children}
    </div>
  );
};

export default ShelfSection;
