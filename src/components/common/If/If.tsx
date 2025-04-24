interface IfProps {
  condition: boolean;
  children: React.ReactNode;
}

export default function If({ condition, children }: IfProps) {
  if (!condition) return null;

  return <>{children}</>;
}
