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
    <>
      <h2>{title} </h2>
      <p>{description}</p>
      <p>{subtitle}</p>
      {children}
    </>
  );
};

export default InputSection;
