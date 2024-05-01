export type StaticPropsWithChildren<T = unknown> = T & {
  children: React.ReactNode;
};
