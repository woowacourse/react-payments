import React, {
  ChangeEvent,
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  Children,
  isValidElement,
  cloneElement,
  InputHTMLAttributes,
  PropsWithRenderProps,
  RenderProps,
  ReactNode,
  ReactElement,
  useId,
  RefObject,
  useRef,
  useEffect,
  LabelHTMLAttributes,
} from 'react';
import { getAllChildElement } from '../../../utils/jsx';
import * as Styled from './InputStyles.styles';

interface InputContext {
  id: string;
  value: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
}

interface InputItemsContext {
  itemMap: Map<string, { ref: RefObject<HTMLInputElement | null> }>;
}

const InputContext = createContext<InputContext>({
  id: '',
  value: '',
  onChange(e: ChangeEvent<HTMLInputElement>) {},
});

const InputItemsContext = createContext<InputItemsContext>({
  itemMap: new Map(),
});

const useInputContext = () => useContext(InputContext);
const useInputItemsContext = () => useContext(InputItemsContext);

function InputItemsProvider({ children }: PropsWithChildren) {
  const itemMap = useRef<InputItemsContext['itemMap']>(new Map()).current;

  return <InputItemsContext.Provider value={{ itemMap }}>{children}</InputItemsContext.Provider>;
}

function InputItem({ children }: PropsWithChildren) {
  const { itemMap } = useInputItemsContext();
  const childrenArray = Children.toArray(children);
  const child = childrenArray[0];
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    itemMap.set('field', { ref });
  }, []);

  validateAsChild(childrenArray);

  if (isValidElement<{ ref: RefObject<HTMLInputElement | null> }>(child)) {
    return cloneElement(child, { ref });
  }

  throw new Error('Not valid element');
}

function Input(props: PropsWithChildren) {
  const { children } = props;
  const id = useId();
  const [value, setValue] = useState<string>('');
  const FieldComponents = getAllChildElement(children, (<Field />).type);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  if (!FieldComponents) throw new Error('Must use at least 1 Field');
  if (FieldComponents.length > 1) throw new Error('Must use only 1 Field');

  return (
    <InputContext.Provider
      value={{
        id,
        value,
        onChange,
      }}
    >
      <InputItemsProvider>{children}</InputItemsProvider>
    </InputContext.Provider>
  );
}

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  asChild?: boolean;
  onPatternMatch?(value: string): void;
  onPatternMismatch?(value: string): void;
}

function Field(props: PropsWithChildren<FieldProps>) {
  const { asChild = false, id: idProps, children, pattern, onPatternMatch, onPatternMismatch, value: valueProps, onChange: onChangeProps, ...restProps } = props;
  const { id, value, onChange } = useInputContext();
  const childrenArray = Children.toArray(children);
  const child = childrenArray[0];

  const localOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    onChangeProps?.(e);
  };

  if (asChild) validateAsChild(childrenArray);

  if (pattern && new RegExp(pattern).test(value)) {
    onPatternMatch?.(value);
  }

  if (pattern && !new RegExp(pattern).test(value)) {
    onPatternMismatch?.(value);
  }

  if (asChild && isValidElement<InputContext & { pattern: string }>(child)) {
    return (
      <InputItem>
        {cloneElement(child, {
          onChange: localOnChange,
          value: valueProps ? String(valueProps) : value,
          id: idProps ? `${idProps}-${id}` : id,
          pattern,
          ...restProps,
        })}
      </InputItem>
    );
  }

  return <input id={idProps ? `${idProps}-${id}` : id} value={valueProps ?? value} onChange={localOnChange} pattern={pattern} {...restProps} />;
}

function PinField() {
  return <input />;
}

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  asChild?: boolean;
}

function Label(props: PropsWithChildren<LabelProps>) {
  const { asChild = false, children, ...restProps } = props;
  const { itemMap } = useInputItemsContext();
  const [fieldId, setFieldId] = useState('');
  const childrenArray = Children.toArray(children);
  const child = childrenArray[0];

  useEffect(() => {
    const fieldItem = itemMap.get('field');

    if (fieldItem && fieldItem.ref.current) {
      setFieldId(fieldItem.ref.current.id);
    }
  }, [itemMap]);

  if (asChild) validateAsChild(childrenArray);

  if (asChild && isValidElement<{ htmlFor: string }>(child)) {
    return cloneElement(child, {
      ...restProps,
      htmlFor: fieldId,
    });
  }

  return (
    <label htmlFor={fieldId} {...restProps}>
      {children}
    </label>
  );
}

interface LimitProps {
  limit: number;
}

interface LimitRenderProps {
  value: InputContext['value'];
  limit: LimitProps['limit'];
}

function Limit(props: PropsWithRenderProps<LimitProps, LimitRenderProps>) {
  const { children, limit } = props;
  const { value } = useInputContext();

  const resolvedChildren = getResolvedChildren(children, {
    value,
    limit,
  });

  return <Styled.Limit>{resolvedChildren}</Styled.Limit>;
}

interface MessageProps {
  pattern: string | null;
  onInvalid?(value: string): void;
}

function Message(props: PropsWithChildren<MessageProps>) {
  const { children, pattern, onInvalid } = props;
  const { value } = useInputContext();

  if (pattern && !new RegExp(pattern).test(value)) {
    onInvalid?.(value);
  }

  return <div>{children}</div>;
}

Input.Field = Field;
Input.PinField = PinField;
Input.Label = Label;
Input.Limit = Limit;
Input.Message = Message;

export default Input;

const validateAsChild = (childrenArray: ReturnType<typeof Children.toArray>) => {
  if (childrenArray.length > 1) throw new Error('자식은 하나만');
  if (childrenArray.length === 0) throw new Error('자식은 필수');
};

const getResolvedChildren: <T>(children: ReactNode | RenderProps<T>, props: T) => ReactNode | ReactElement<T> = (children, props) => {
  return typeof children === 'function' ? children(props) : children;
};
