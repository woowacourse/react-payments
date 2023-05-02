import { PropsWithChildren } from "react";
import BackButton from "./BackButton";
import styles from "./Header.module.css";

interface Props extends PropsWithChildren {
  hasBackButton?: boolean;
}

const Header = (props: Props) => {
  const { hasBackButton, children } = props;

  return (
    <header className={styles.header}>
      {hasBackButton && <BackButton />}
      <span className={styles.title}>{children ?? ""}</span>
    </header>
  )
};

export default Header;
