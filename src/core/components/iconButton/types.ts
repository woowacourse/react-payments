import type { ElementType, ReactNode } from 'react';

import type { PolymorphicProps } from '@/core/components/view';

export type AS = 'button' | 'a';

export type IconButtonOwnProps = {
  icon: ReactNode;
};

export type IconButtonProps<T extends ElementType = AS> = PolymorphicProps<T, IconButtonOwnProps>;
