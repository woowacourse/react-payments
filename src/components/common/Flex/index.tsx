import { ComponentProps, ReactNode } from 'react';

import { StyledFlexBox } from './Flex.styled';

export type Props = {
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
export const Flex = ({
  direction = 'row',
  justifyContent = 'center',
  alignItems = 'center',
  gap = '0',
  flex = 1,
  margin,
  padding,
  width,
  height,
  children,
  ...props
}: Props) => {
  return (
    <StyledFlexBox
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      flex={flex}
      margin={margin}
      padding={padding}
      width={width}
      height={height}
      {...props}
    >
      {children}
    </StyledFlexBox>
  );
};
