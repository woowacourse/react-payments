import * as S from './Spacing.styles';
import { forwardRef } from 'react';
interface SpacingProps extends React.HTMLAttributes<HTMLDivElement> {
  size: number;
}

export default forwardRef<HTMLDivElement, SpacingProps>(function Spacing({ size, ...props }, ref) {
  return <S.Spacing size={size} ref={ref} {...props} />;
});
