import styles from './TextField.module.css';

const TextFieldContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const Title: React.FC<{ title: string }> = ({ title }) => <p className="title">{title}</p>;

const SubTitle: React.FC<{ subTitle: string }> = ({ subTitle }) => (
  <h1 className={`caption ${styles.textFieldSubTitle}`}>{subTitle}</h1>
);

const Label: React.FC<{ labelText: string }> = ({ labelText }) => <label className="label">{labelText}</label>;

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
