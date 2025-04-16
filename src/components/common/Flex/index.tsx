import { ComponentProps, ReactNode } from 'react';

import { StyledFlexBox } from './Flex.styled';

export type Props = {
  /**
   * Flex 방향을 설정합니다.
   */
  direction?: 'row' | 'column';
  /**
   * Flex 정렬을 설정합니다.
   */
  justifyContent?: 'flex-start' | 'center' | 'flex-end';
  /**
   * Flex 정렬을 설정합니다.
   */
  alignItems?: 'flex-start' | 'center' | 'flex-end';
  /**
   * Flex gap을 설정합니다.
   * @default 0
   */
  gap?: string;
  /**
   * Flex margin을 설정합니다.
   * @default 0
   */
  margin?: string;
  /**
   * Flex padding을 설정합니다.
   * @default 0
   */
  padding?: string;
  /**
   * Flex width를 설정합니다.
   * @default auto
   */
  width?: string;
  /**
   * Flex height를 설정합니다.
   * @default auto
   */
  height?: string;
  /**
   * Flex children을 설정합니다.
   */
  children: ReactNode;
} & ComponentProps<'div'>;
export const Flex = ({
  direction = 'row',
  justifyContent = 'center',
  alignItems = 'center',
  gap = '0',
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
