import styles from './inputSection.module.css';

type InputSectionProps = {
  title: string;
  description: string;
  subtitle: string;
  children: React.ReactNode;
};

const InputSection = ({
  title,
  description,
  subtitle,
  children,
}: InputSectionProps) => {
  return (
    <div>
      <h2 className={styles.title}>{title} </h2>
      <p className={styles.description}>{description}</p>
      <p className={styles.subtitle}>{subtitle}</p>
      {children}
    </div>
  );
};

export default InputSection;
