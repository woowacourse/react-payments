import {
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

import styles from './tooltip.module.css';

interface Props {
  children: ReactNode;
}

const Tooltip = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsTooltipOpen((prev) => !prev);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsTooltipOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.container} onClick={handleClick} ref={ref}>
      {children}
      {isTooltipOpen && (
        <div className={styles.message}>
          <span>
            카드 뒷면의 서명란에 인쇄된 숫자 끝 3자리가 CVC 번호입니다.
          </span>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
