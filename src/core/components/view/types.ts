export type ViewProps<T extends React.ElementType = 'div'> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

export type PolymorphicProps<T extends React.ElementType = 'div', P = {}> = {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof P | 'as'> &
  P;
