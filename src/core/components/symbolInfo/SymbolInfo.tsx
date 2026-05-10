import type { ComponentProps, ReactNode } from 'react';

import cn from 'classnames';

import styles from './SymbolInfo.module.css';

import SymbolCompleteImg from './imgs/symbol-complete.svg?react';

type SymbolType = 'complete';

interface SymbolInfoOwnProps {
  full?: boolean;
  symbol: SymbolType;
  action: ReactNode;
}

interface SymbolInfoProps extends Omit<ComponentProps<'div'>, keyof SymbolInfoOwnProps>, SymbolInfoOwnProps {}

const symbols = {
  complete: <SymbolCompleteImg />,
};

export const SymbolInfo = ({ children, full, symbol, action, ...rest }: SymbolInfoProps) => {
  const symbolImg = symbols[symbol] || null;
  return (
    <div className={cn(styles.symbolInfo, full && styles[`is-full`])} {...rest}>
      <div className={styles.box}>
        <div className={styles.symbol}>{symbolImg}</div>
        <div className={styles.content}>{children}</div>
        <div className={styles.action}>{action}</div>
      </div>
    </div>
  );
};
