import type { ViewProps } from './';

export const View = <T extends React.ElementType = 'div'>(props: ViewProps<T>) => {
  const { as, ...restProps } = props;
  const Component = as || 'div';

  return <Component {...restProps} />;
};
