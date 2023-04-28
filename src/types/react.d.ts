export module 'react' {
  type RenderProps<T = unknown> = (props: T) => ReactElement;
  type PropsWithRenderProps<P = unknown, T = unknown> = P & {
    children?: ReactNode | RenderProps<T>;
  };
}
