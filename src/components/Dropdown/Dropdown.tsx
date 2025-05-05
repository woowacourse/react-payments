import { useState } from 'react';
import styles from './Dropdown.module.css';
import { useOutsideClick } from '../../hooks/useOutsideClick';

export default function Dropdown<T extends string>({
  list,
  value,
  onSelect,
  placeholder
}: {
  list: readonly T[];
  value: T | null;
  onSelect: (value: T) => void;
  placeholder: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const ref = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));

  const handleSelect = (item: T) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        type="button"
        autoFocus={value === ''}
        className={`${styles.selectBox} ${isOpen && styles.open} ${value ? styles.selected : styles.unSelected}`}
        onClick={handleToggle}
      >
        {value || placeholder}
      </button>
      {isOpen && (
        <ul className={styles.list}>
          {list.map((item) => (
            <li key={item} className={styles.item} onClick={() => handleSelect(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
