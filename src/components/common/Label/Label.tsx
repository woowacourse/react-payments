import { forwardRef, PropsWithChildren } from 'react';

interface LabelProps {
  id: string;
}

export default forwardRef<HTMLLabelElement, PropsWithChildren<LabelProps>>(function Label(
  { id, children, ...props },
  ref,
) {
  return (
    <label htmlFor={id} ref={ref} {...props}>
      {children}
    </label>
  );
});
