import React, {
  ChangeEvent,
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  ReactElement,
  ReactNode,
  Children,
  isValidElement,
  cloneElement,
  HTMLAttributes,
  InputHTMLAttributes,
} from 'react';
import * as Styled from './input.styles';

export const getChildElement = (
  children: ReactNode,
  elementType: any
): [ReactElement | null, ReturnType<typeof Children.toArray>] => {
  let targetChild: [ReactElement] | null = null;
  const childrenArray = Children.toArray(children);
  const restChildren = childrenArray.filter((child) => {
    if (isValidElement(child) && child.type === elementType) {
      targetChild = targetChild ?? [child];
      return false;
    }

    return true;
  });

  return [targetChild, restChildren];
};

const InputContext = createContext({
  value: '',
  onChange(e: ChangeEvent<HTMLInputElement>) {
    //
  },
});

const useInputContext = () => useContext(InputContext);

function Input(props: PropsWithChildren) {
  const { children } = props;
  const [value, setValue] = useState<string>('');
  const childrenArray = Children.toArray(children);

  const [LabelComponent, labelRestChildren] = getChildElement(
    children,
    (<Label />).type
  );

  const [LimitComponent, limitRestChildren] = getChildElement(
    labelRestChildren,
    (<Limit limit={30} />).type
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <InputContext.Provider
      value={{
        value,
        onChange,
      }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {LabelComponent && LabelComponent}
        {LimitComponent && LimitComponent}
      </div>
      {limitRestChildren}
    </InputContext.Provider>
  );
}

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  asChild?: boolean;
}

function Field(props: PropsWithChildren<FieldProps>) {
  const { children, asChild = false, pattern = '', placeholder = '' } = props;
  const { value, onChange } = useInputContext();
  const childrenArray = Children.toArray(children);

  if (asChild && childrenArray.length > 1)
    throw new Error('자식은 하나만 어쩌구');
  if (asChild && childrenArray.length === 0) throw new Error('자식은 필수');

  if (
    asChild &&
    isValidElement<{
      onChange(e: ChangeEvent<HTMLInputElement>): void;
      placeholder: string;
      pattern: string;
    }>(childrenArray[0])
  ) {
    return cloneElement(childrenArray[0], { onChange, placeholder, pattern });
  }

  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      pattern={pattern}
    />
  );
}

function PinField() {
  return <input />;
}

function Label(props: PropsWithChildren) {
  const { children } = props;
  return <label>{children}</label>;
}

interface LimitProps {
  limit: number;
}

function Limit(props: PropsWithChildren<LimitProps>) {
  const { limit } = props;
  const { value } = useInputContext();

  return (
    <span>
      {value.length ?? 0}/{limit}
    </span>
  );
}

function Information() {
  return <button></button>;
}

function Message() {
  return <div></div>;
}

Input.Field = Field;
Input.PinField = PinField;
Input.Label = Label;
Input.Limit = Limit;
Input.Information = Information;
Input.Message = Message;

export default Input;
