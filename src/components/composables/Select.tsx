import { SelectHTMLAttributes, PropsWithChildren, forwardRef } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const Select = forwardRef<HTMLSelectElement, PropsWithChildren<SelectProps>>((props, ref) => {
  const { onChange, children } = props;

  return (
    <select ref={ref} onChange={onChange}>
      {children}
    </select>
  );
});

export default Select;
