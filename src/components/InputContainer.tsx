import { PropsWithChildren } from 'react';
import ErrorMessage from './ErrorMessage';

type InputContainerProps = {
  className: string;
};
const InputContainer = ({ children, className }: PropsWithChildren<InputContainerProps>) => {
  return (
    <section className={className}>
      {children}
      <ErrorMessage />
    </section>
  );
};

export default InputContainer;
