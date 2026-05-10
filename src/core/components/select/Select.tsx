import { useState, type ComponentProps, type ReactNode } from 'react';

import cn from 'classnames';

import styles from './Select.module.css';

import ArrowDownImg from './imgs/select-arrow-down.svg?react';

interface Option {
  value: unknown;
  text: ReactNode;
}

interface ChangeEvent {
  target: {
    id: string;
    value: unknown;
  };
}

interface SelectOwnProps {
  id: string;
  options: Option[];
  value: unknown;
  onChange: (e: ChangeEvent) => void;
}

interface SelectProps extends Omit<ComponentProps<'select'>, keyof SelectOwnProps>, SelectOwnProps {}

export const Select = ({ value, onChange, options, id }: SelectProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleChange = (e: ChangeEvent) => {
    setOpen(false);
    onChange(e);
  };

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className={cn(styles.select, open && styles.open)}>
      <div className={styles.box} onClick={handleClickOpen}>
        {selectedOption?.text}
        <div className={styles.arrow}>
          <ArrowDownImg />
        </div>
      </div>
      {open && (
        <div className={styles.options}>
          <ul className={styles.list}>
            {options.map((option: Option) => {
              const selected = value === option.value;

              return (
                <li className={cn(selected && styles.selected)}>
                  <a
                    href="#"
                    onClick={() => {
                      handleChange({
                        target: {
                          id,
                          value: option.value,
                        },
                      });
                    }}
                  >
                    {option.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
