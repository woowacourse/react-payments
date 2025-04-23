import { ComponentProps, ReactNode } from 'react';

export type FlexProps = {
  /**
   * Controls flex direction (row or column)
   * @default row
   */
  direction?: 'row' | 'column';
  /**
   * Controls horizontal alignment of items
   * @default center
   */
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit';
  /**
   * Controls vertical alignment of items
   * @default center
   */
  alignItems?:
    | 'normal'
    | 'start'
    | 'center'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'stretch'
    | 'initial'
    | 'inherit';
  /**
   * Specifies spacing between flex items
   * @default 0
   */
  gap?: string;
  /**
   * Sets flex grow/shrink ratio
   * @default 1
   */
  flex?: number;
  /**
   * Sets outer spacing around the container
   * @default 0
   */
  margin?: string;
  /**
   * Sets inner spacing within the container
   * @default 0
   */
  padding?: string;
  /**
   * Sets container width
   * @default auto
   */
  width?: string;
  /**
   * Sets container height
   * @default auto
   */
  height?: string;
  /**
   * Required prop for content inside the container
   */
  children: ReactNode;
} & ComponentProps<'div'>;
