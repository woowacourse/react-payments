interface FormProps {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export const Form = ({ onSubmit, children }: FormProps) => (
  <form onSubmit={onSubmit} noValidate>
    {children}
  </form>
);
