import useFinishValue from '../../../hooks/useFinishValue';

import styles from './title.module.css';

interface Props {
  text: string | string[];
  change?: boolean;
}

const Title = ({ text, change }: Props) => {
  if (Array.isArray(text) && change) {
    const isFinish = useFinishValue();

    return <h1 className={styles.title}>{isFinish ? text[0] : text[1]}</h1>;
  }

  return <h1 className={styles.title}>{text}</h1>;
};

export default Title;
