import { ReactNode } from 'react';

interface ConditionalRenderProps {
  condition: boolean;
  children: ReactNode;
}

function ConditionalRender({ condition, children }: ConditionalRenderProps) {
  if (!condition) return null;
  return <>{children}</>;
}

export default ConditionalRender;
