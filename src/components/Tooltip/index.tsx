import { useEffect, useRef, useState } from 'react';
import type { MouseEventHandler } from 'react';

import styles from './tooltip.module.css';

interface Props {
  message: string;
}

const Tooltip = ({ message }: Props) => {
  const [toggleShow, setToggleShow] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleTooltipClick: MouseEventHandler<HTMLDivElement> = () => {
    setToggleShow((prev) => !prev);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      tooltipRef.current &&
      !tooltipRef.current.contains(event.target as Node)
    ) {
      setToggleShow(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={styles.container}
      onClick={handleTooltipClick}
      ref={tooltipRef}
    >
      <button type="button" className={styles.button}>
        <span className={styles.mark}>?</span>
      </button>
      {toggleShow && (
        <div className={styles.message}>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
