import styles from './TextField.module.css';

const TextFieldMain: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const Title: React.FC<{ title: string }> = ({ title }) => <p className="title">{title}</p>;

const SubTitle: React.FC<{ subTitle: string }> = ({ subTitle }) => (
  <h1 className={`caption ${styles.textFieldSubTitle}`}>{subTitle}</h1>
);

const Label: React.FC<{ labelText: string; htmlFor?: string }> = ({ labelText, htmlFor }) => (
  <label htmlFor={htmlFor} className="label">
    {labelText}
  </label>
);

const Content: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className={styles.textFieldContent}>{children}</div>
);

const ErrorText: React.FC<{ errorText: string }> = ({ errorText }) => (
  <p className={`caption ${styles.textFieldErrorText}`}>{errorText}</p>
);

const TextField = Object.assign(TextFieldMain, {
  Title,
  SubTitle,
  Label,
  Content,
  ErrorText,
});

export default TextField;
