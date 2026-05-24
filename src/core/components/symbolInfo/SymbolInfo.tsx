import type { ComponentProps, ReactNode } from 'react';

import cn from 'classnames';

import styles from './SymbolInfo.module.css';

import SymbolCompleteImg from './imgs/symbol-complete.svg?react';
import SymbolInfoImg from './imgs/symbol-info.svg?react';
import SymbolGhostCardImg from './imgs/symbol-ghost-card.svg?react';

type SymbolType = keyof typeof symbols;

interface SymbolInfoOwnProps {
  full?: boolean;
  symbol: SymbolType;
  description?: ReactNode;
  action: ReactNode;
}

interface SymbolInfoProps extends Omit<ComponentProps<'div'>, keyof SymbolInfoOwnProps>, SymbolInfoOwnProps {}

const symbols = {
  complete: <SymbolCompleteImg />,
  info: <SymbolInfoImg />,
  ghostCard: <SymbolGhostCardImg />,
};

export const SymbolInfo = ({ children, description, full, symbol, action, ...rest }: SymbolInfoProps) => {
  const symbolImg = symbols[symbol] || null;
  return (
    <div className={cn(styles.symbolInfo, full && styles[`is-full`])} {...rest}>
      <div className={styles.box}>
        <div className={styles.symbol}>{symbolImg}</div>
        <div className={styles.content}>{children}</div>
        {description && <div className={styles.description}>{description}</div>}
        <div className={styles.action}>{action}</div>
      </div>
    </div>
  );
};
