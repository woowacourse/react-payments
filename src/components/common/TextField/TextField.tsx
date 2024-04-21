import styles from './TextField.module.css';

const TextFieldContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const Title: React.FC<{ title: string }> = ({ title }) => <h1 className="title">{title}</h1>;

const SubTitle: React.FC<{ subTitle: string }> = ({ subTitle }) => (
  <p className={`caption ${styles.textFieldSubTitle}`}>{subTitle}</p>
);

const Label: React.FC<{ labelText: string; htmlFor?: string }> = ({ labelText, htmlFor }) => (
  <label htmlFor={htmlFor} className="label">
    {labelText}
  </label>
);

const Content: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className={styles.textFieldContent}>{children}</div>
);

const ErrorText: React.FC<{ isError: boolean; errorText: string }> = ({ isError, errorText }) => (
  <p className={`caption ${styles.textFieldErrorText}`}>{isError ? errorText : ''}</p>
);

const TextField = Object.assign(TextFieldContainer, {
  Title,
  SubTitle,
  Label,
  Content,
  ErrorText,
});

export default TextField;
