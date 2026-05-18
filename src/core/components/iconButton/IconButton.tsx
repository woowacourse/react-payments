import type { ElementType } from 'react';

import cn from 'classnames';

import { View } from '@/core/components/view';
import { Icon } from '@/core/components/icon';
import type { IconProps } from '@/core/components/icon';

import styles from './IconButton.module.css';

import type { IconButtonProps } from '.';

export const IconButton = <T extends ElementType>({ as = 'button', icon, ...rest }: IconButtonProps<T>) => {
  return (
    <View as={as} className={cn(styles.iconButton)} {...rest}>
      <Icon icon={icon as IconProps['icon']} />
    </View>
  );
};
