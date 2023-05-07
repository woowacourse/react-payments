import styles from './LoadingSpinner.module.css';

interface Props {
  diameter?: string;
  borderWidth?: string;
  color?: string;
}

const LoadingSpinner = (props: Props) => {
  const { diameter, borderWidth, color } = props;

  return (
    <div 
      className={styles.spinner}
      style={{ 
        width: diameter ?? '77px',
        height: diameter ?? '77px',
        borderWidth: borderWidth ?? '7px',
        borderTopColor: color ?? 'hotpink',
    }}></div>
  )
};

export default LoadingSpinner;
