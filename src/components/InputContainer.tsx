import { PropsWithChildren } from 'react';
import ErrorMessage from './ErrorMessage';
import { InputContainerProps } from '../type';

const InputContainer = ({
  children,
  className,
  status,
  inputType,
}: PropsWithChildren<InputContainerProps>) => {
  return (
    <section className={className}>
      {children}
      <ErrorMessage status={status} inputType={inputType} />
    </section>
  );
};

export default InputContainer;
