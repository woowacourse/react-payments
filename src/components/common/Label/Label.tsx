import styles from './Label.module.css';

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
      className={`${hideLabel ? styles.hide : styles.label}`}
    >
      {labelText}
    </label>
  );
}
