import styles from './Label.module.css';
import clsx from 'clsx';

interface LabelProps {
  htmlFor: string;
  labelText: string;
  hideLabel?: boolean;
}

export default function Label({
  htmlFor,
  labelText,
  hideLabel = false,
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(styles.label, { [styles.hide]: hideLabel })}
    >
      {labelText}
    </label>
  );
}
