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
  useId,
  RefObject,
  useRef,
  useEffect,
  LabelHTMLAttributes,
} from 'react';
import { getAllChildElement, getResolvedChildren, validateAsChild } from '../../../utils/jsx';
import * as Styled from './InputStyles.styles';

type InputContext = InputHTMLAttributes<HTMLInputElement>;

const InputContext = createContext<InputContext>({});

const useInputContext = () => useContext(InputContext);

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
}

function Field(props: PropsWithChildren<FieldProps>) {
  const {
    asChild = false,
    id: idProps,
    children,
    pattern,
    value: valueProps,
    onChange: onChangeProps,
    ...restProps
  } = props;
  const { id, value, onChange } = useInputContext();
  const childrenArray = Children.toArray(children);
  const child = childrenArray[0];

  const localOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeProps?.(e);
    onChange?.(e);
  };

  if (asChild) validateAsChild(childrenArray);

  if (asChild && isValidElement<InputContext & { pattern: string; 'data-item': 'field' }>(child)) {
    return (
      <InputItem>
        {cloneElement(child, {
          ...restProps,
          onChange: localOnChange,
          value: valueProps ?? value,
          id: idProps ? `${idProps}-${id}` : id,
          pattern,
          'data-item': 'field',
        })}
      </InputItem>
    );
  }

  return (
    <InputItem>
      <input
        {...restProps}
        data-item="field"
        id={idProps ? `${idProps}-${id}` : id}
        value={valueProps ?? value}
        onChange={localOnChange}
        pattern={pattern}
      />
    </InputItem>
  );
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
  }, []);

  if (asChild && isValidElement<{ htmlFor: string }>(child)) {
    return cloneElement(child, {
      ...restProps,
      htmlFor: fieldId,
    });
  }

  return (
    <label {...restProps} htmlFor={fieldId}>
      {children}
    </label>
  );
}

interface LimitProps {
  limit: number;
}

interface LimitRenderProps {
  value: string;
  limit: LimitProps['limit'];
}

function Limit(props: PropsWithRenderProps<LimitProps, LimitRenderProps>) {
  const { children, limit } = props;
  const { value } = useInputContext();

  const resolvedChildren = getResolvedChildren(children, {
    value: String(value),
    limit,
  });

  return <Styled.Limit>{resolvedChildren}</Styled.Limit>;
}

Input.Field = Field;
Input.Label = Label;
Input.Limit = Limit;

export default Input;

interface InputItemsContext {
  itemMap: Map<string, { ref: RefObject<HTMLInputElement | null> }>;
}

const InputItemsContext = createContext<InputItemsContext>({
  itemMap: new Map(),
});

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

  validateAsChild(childrenArray);

  if (!isValidElement<{ 'data-item': string; ref: RefObject<HTMLInputElement | null> }>(child))
    throw new Error('Not valid element');

  useEffect(() => {
    itemMap.set(child.props['data-item'], { ref });
  }, []);

  return cloneElement(child, { ref });
}
