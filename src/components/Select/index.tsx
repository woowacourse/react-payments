import React, {
  ChangeEvent,
  CSSProperties,
  FocusEvent,
  ReactNode,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import styles from './style.module.css';

const PLACE_HOLDER = 'place_holder';

const BLACK_COLOR_STYLE: CSSProperties = { color: 'inherit' };
interface SelectProps
  extends Omit<React.HTMLProps<HTMLSelectElement>, 'onChange,onFocus'> {
  error: boolean;
  label: string;
  // options
  children: ReactNode;
  optionPlaceholder: string;
  extraChangeHandler?: (event: ChangeEvent<HTMLSelectElement>) => void;
  extraFocusHandler?: (event: FocusEvent<HTMLSelectElement>) => void;
}

function Select(props: SelectProps) {
  const {
    label,
    children,
    optionPlaceholder,
    error,
    extraChangeHandler,
    extraFocusHandler,
    ...rest
  } = props;
  // 옵션 선택, select focus,blur 여부에 따라 select의 color를 변경하기 위한 상태
  const [selectColorStyle, setSelectColorStyle] = useState<CSSProperties>();
  const selectId = `card-company-select-${useId()}`;
  const selectRef = useRef<HTMLSelectElement>(null);

  const selectClassName = useMemo(
    () => `${styles.select} ${error ? styles.error : ''}`,
    [error],
  );

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const isPlaceholder = value !== PLACE_HOLDER;
    setSelectColorStyle(isPlaceholder ? undefined : BLACK_COLOR_STYLE);
    if (extraChangeHandler) extraChangeHandler(event);
  };

  const handleFocus = (event: FocusEvent<HTMLSelectElement>) => {
    setSelectColorStyle(BLACK_COLOR_STYLE);
    if (extraFocusHandler) extraFocusHandler(event);
  };

  useLayoutEffect(() => {
    selectRef.current?.focus();
  }, []);
  return (
    <>
      <label className="scr-only" htmlFor={selectId}>
        {label}
      </label>
      <select
        ref={selectRef}
        id={selectId}
        className={selectClassName}
        style={selectColorStyle}
        onChange={handleSelectChange}
        onFocus={handleFocus}
        {...rest}
      >
        <option
          className={styles.selectPlaceholder}
          value={PLACE_HOLDER}
          disabled
          selected
        >
          {optionPlaceholder}
        </option>
        {children}
      </select>
    </>
  );
}

export default Select;
