import { useState } from 'react';
import styles from './Dropdown.module.css';
import { useOutsideClick } from '../../hooks/useOutsideClick';

export default function Dropdown2({
  list,
  value,
  onSelect,
  placeholder
}: {
  list: string[];
  value: string;
  onSelect: (value: string) => void;
  placeholder: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const ref = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));

  return (
    <div className={styles.wrapper} ref={ref}>
      <button className={`${styles.selectBox} ${value ? styles.selected : styles.unSelected} `} onClick={handleToggle}>
        {value || placeholder}
      </button>
      {isOpen && (
        <ul className={styles.list}>
          {list.map((company) => (
            <li
              key={company}
              className={styles.item}
              onClick={() => {
                onSelect(company);
                setIsOpen((prev) => !prev);
              }}
            >
              {company}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
